json.array!(@users) do |user|
  json.extract! user, :id, :code, :name, :location
  json.url user_url(user, format: :json)
end