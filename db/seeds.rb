User.all.destroy_all 
Post.all.destroy_all

puts "seeding"

puts "seeding users"
u1 = User.create!(username: "beverly", email: "renaldo.cassin@cole.info", password: '1234', profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUFkGPvBoMzEwAcd__BLtrWVB-s5eba5QOD_7EwUQXHdF2Pez5QV4_nyZ4gFetpQLG_0&usqp=CAU", bio: "I am a pokemon")
u2 = User.create!(username: "delmar_gorczany", email: "wm.swift@mosciski.com", password: '1234', profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUFkGPvBoMzEwAcd__BLtrWVB-s5eba5QOD_7EwUQXHdF2Pez5QV4_nyZ4gFetpQLG_0&usqp=CAU", bio: "I am a pokemon")
u3 = User.create!(username: "ellis_fahey", email: "monique.kunde@hettinger.info", password: '1234', profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUFkGPvBoMzEwAcd__BLtrWVB-s5eba5QOD_7EwUQXHdF2Pez5QV4_nyZ4gFetpQLG_0&usqp=CAU", bio: "I am a pokemon")
u4 = User.create!(username: "ollie_friesen", email: "susie.emmerich@nicolas.co", password: '1234', profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUFkGPvBoMzEwAcd__BLtrWVB-s5eba5QOD_7EwUQXHdF2Pez5QV4_nyZ4gFetpQLG_0&usqp=CAU", bio: "I am a pokemon")
u5 = User.create!(username: "dannie", email: "laquita.hettinger@volkman-bode.name", password: '1234', profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUFkGPvBoMzEwAcd__BLtrWVB-s5eba5QOD_7EwUQXHdF2Pez5QV4_nyZ4gFetpQLG_0&usqp=CAU", bio: "I am a pokemon")

# 5.times {User.create!(
#         username: Faker::Internet.username, 
#         email: Faker::Internet.email, 
#         password: '1234', 
#         profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUFkGPvBoMzEwAcd__BLtrWVB-s5eba5QOD_7EwUQXHdF2Pez5QV4_nyZ4gFetpQLG_0&usqp=CAU", 
#         bio: "I am a pokemon")
# }

puts "seeding posts"
# 10.times {Post.create!(
#         author_id: User.all.sample,
#         hed: Faker::Book.title,
#         dek: Faker::Marketing.buzzwords,
#         content: Faker::Lorem.paragraph,
#         draft: true,
#         pub_date: Faker::Time.forward(days: 5))}














p1 = Post.create!(
    author_id: u1.id, 
    hed: "This is a headline", 
    dek: "This is a description", 
    content: "This is content", 
    draft: true, 
    pub_date: Faker::Time.forward
    )
p2 = Post.create!(author_id: u2.id, hed: "This is a headline", dek: "This is a description", content: "This is content", draft: true, pub_date: Faker::Time.forward)
p3 = Post.create!(author_id: u3.id, hed: "This is a headline", dek: "This is a description", content: "This is content", draft: true, pub_date: Faker::Time.forward)
p4 = Post.create!(author_id: u4.id, hed: "This is a headline", dek: "This is a description", content: "This is content", draft: true, pub_date: Faker::Time.forward)
p5 = Post.create!(author_id: u5.id, hed: "This is a headline", dek: "This is a description", content: "This is content", draft: true, pub_date: Faker::Time.forward)
p6 = Post.create!(author_id: u5.id, hed: "This is a headline", dek: "This is a description", content: "This is content", draft: true, pub_date: Faker::Time.forward)
p7 = Post.create!(author_id: u4.id, hed: "This is a headline", dek: "This is a description", content: "This is content", draft: true, pub_date: Faker::Time.forward)
p8 = Post.create!(author_id: u2.id, hed: "This is a headline", dek: "This is a description", content: "This is content", draft: true, pub_date: Faker::Time.forward)
p9 = Post.create!(author_id: u1.id, hed: "This is a headline", dek: "This is a description", content: "This is content", draft: true, pub_date: Faker::Time.forward )

puts 'everything seeded'