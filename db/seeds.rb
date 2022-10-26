User.all.destroy_all 
Post.all.destroy_all 
Like.all.destroy_all 
Follow.all.destroy_all

puts "seeding"

puts "seeding users"
20.times {User.create!(
    username: Faker::Name.first_name, 
    email: Faker::Internet.email,
    password: "1234",
    bio: "I'm a cool person",
    profile_pic: ""
    )
}

puts "seeding posts"
10.times {Post.create!(
    user_id: User.all.sample.id,
    hed: Faker::Book.title,
    dek: Faker::Marketing.buzzwords,
    content: Faker::Lorem.paragraph,
    draft: true,
    pub_date: Faker::Time.forward(days: 5),
    link: "",
    photo: "",
    tags: ""
    )
}

puts "seeding social interactions"

10.times {Like.create!(
    user_id: User.all.sample.id,
    post_id: Post.all.sample.id,
        )
    }

puts "seeding follows"
10.times {Follow.create!(
    follower_id: User.all.sample.id,
    followed_id: User.all.sample.id
    )
    }

puts "done seeding"
