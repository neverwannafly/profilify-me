class ProfilifyController < ApplicationController
  before_action :validate_request, except: [:fetch, :list, :list_post]

  def fetch
    username = params[:username]
    source_id = params[:source]
    user = User.find_by(username: username)
    profile = Profile
                .joins("INNER JOIN users ON users.id=profiles.user_id")
                .select("profiles.*, CONCAT(users.first_name, ' ', users.last_name) as name, users.username")
                .where(user_id: user&.id)
                .first
    
    likes = Like.where(target_type: "Profile", target_id: profile&.id)
    liked_by_source = likes.where(user_id: source_id).count == 1

    render json: {
      profile: profile,
      likes: likes.count,
      liked_by_source: liked_by_source,
      owner: user&.id,
    }
  end

  def create
    profile = Profile.new profile_params
    profile.user_id = current_user.id
    profile.save!
    render json: {
      success: true,
    }
  rescue => e
    render json: {
      success: false,
      error: "There was an error creating profile! Please try later."
    }
  end

  def edit
    profile = Profile.find_by(user_id: current_user.id)
    profile.update! profile_params
    render json: {
      success: true,
    }
  rescue => e
    render json: {
      success: false,
      error: "There was an error updating profile! Please try later."
    }
  end

  def list
    source_id = params[:source]
    profiles = Profile
                .joins("INNER JOIN users ON users.id=profiles.user_id")
                .joins("LEFT OUTER JOIN likes ON likes.target_type='Profile' AND likes.target_id=profiles.id")
                .order("profiles.created_at DESC")
                .select("CONCAT(users.first_name, ' ', users.last_name) as name, users.username, profiles.*, COUNT(likes.id) AS LIKES, bit_or(CAST (likes.user_id=#{source_id} as integer)) as liked")
                .group('profiles.id, users.id')
    render json: {
      profiles: profiles
    }
  end

  def handle_like
    content_type = params[:content][:contentType]
    content_id = params[:content][:contentId]
    like = Like.find_by(target_id: content_id, target_type: content_type, user_id: current_user.id)
    if like.nil?
      Like.create! user_id: current_user.id, target_id: content_id, target_type: content_type
    else
      like.destroy!
    end

    render json: {
      success: true,
    }
  rescue => e
    render json: {
      success: false,
    }
  end

  def get_post
    post_id = params[:post_id]
    post = Post.where(post_id: post_id)
    render json: {
      post: post
    }
  end

  def list_post
    username = params[:username]
    source_id = params[:source] || 0
    user = User.find_by(username: username)
    posts = Post
              .joins("INNER JOIN users ON users.id=posts.user_id")
              .joins("LEFT OUTER JOIN likes ON likes.target_type='Post' AND likes.target_id=posts.id")
              .select("users.username, posts.*, COUNT(likes.id) AS LIKES, bit_or(CAST (likes.user_id=#{source_id} as integer)) as liked")
              .group('posts.id, users.id')
              .order("posts.created_at DESC")
              .where("users.id=#{user&.id}")
    render json: {
      posts: posts
    }
  end

  def new_post
    post = Post.new post_params
    post.user_id = current_user.id
    post.save!
    render json: {
      success: true,
    }
  rescue => e
    render json: {
      success: false,
      error: "Something went wrong, please try again later"
    }
  end

  def edit_post
    post_id = params[:post_id]
    post = Post.find_by(id: post_id)
    post.update! post_params
    render json: {
      success: true,
    }
  rescue => e
    render json: {
      success: false,
      error: "Something went wrong, please try again later"
    }
  end

private
  def profile_params
    params.require(:profile).permit(:linkedin, :github, :facebook, :twitter, :bio, :university, :mottoa, :picture)
  end

  def like_params
    params.require(:content).permit(:contentType, :contentId)
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
