puts "starting to seed..."

user = User.create(first_name: "Craig", last_name: "Coleman", email: "craig.coleman.cc@gmail.com", username: "CraigC", password: "pw", image: "https://avatars.githubusercontent.com/u/90735794?s=400&u=c9da7d152ea6b8b9473a2864228c55759fc1de45&v=4")
author = Author.create(first_name: "Stephen", last_name: "King", age: 75, best_seller: "The Shining", books_published: 83, image: "https://images.gr-assets.com/authors/1362814142p8/3389.jpg")
publisher = Publisher.create(title: "Viking", year_established: 1925, primary_genre: "Horror", image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Viking_Press_logo.png")
book = user.books.create(title: "IT", length: 1138, year_published: 1986, author_id: author.id, publisher_id: publisher.id, cover: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/4117PWF91KL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", description: "Welcome to Derry, Maine. Its a small city, a place as hauntingly familiar as your own hometown. 
    Only in Derry the haunting is real.  They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the citys children. 
    Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derrys sewers.  Readers of Stephen King know that Derry, Maine, is a place with a deep, dark hold on the author. It reappears in many of his books, including Bag of Bones, Hearts in Atlantis, and 11/22/63. But it all starts with It.")

author1 = Author.create(first_name: "Markus", last_name: "Heitz", age: 51, best_seller: "The Dwarves", books_published: 51, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQs1hEfskObHJGepsxEQvgc0eSCwplQf0syAWAXdOU2ogRRoz0V")
publisher1 = Publisher.create(title: "Orbit Books", year_established: 1974, primary_genre: "Science Fiction", image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Orbit_Books_logo.png")
book1 = user.books.create(title: "The War of the Dwarves", length: 683, year_published: 2004, author_id: author1.id, publisher_id: publisher1.id, cover: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51ldic5c5SL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", description: "The dwarves have gone to battle and they have been victorious. But outside the realm, dark forces are at work.. .

    A secret army of Orcs, made immortal by the hidden powers of the Black Water, now marches towards Girdlegard, set to unleash its fury upon the kingdom. Sooner than they realize, Tungdil and his comrades will need to summon all their courage to do battle against this bloodthirsty horde.
    
    The Orcs are not the only threat. An unspeakable new power is growing and threatens the very existence of the dwarves. But both enemies have forgotten one very important truth: a dwarf is never more dangerous than when total obliteration seems inevitable . . .")

user1 = User.create(first_name: "Dude", last_name: "Love", email: "craig.coleman.cc@gmail.com", username: "DudeLove", password: "pw", image: "https://www.wwe.com/f/styles/gallery_img_l/public/photo/image/2012/07/01_DL0101S.jpg");
author2 = Author.create(first_name: "Neil", last_name: "Oliver", age: 55, best_seller: "Vikings", books_published: 23, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Neil_Oliver_at_Windsor_Quay_%28cropped%29.jpg/220px-Neil_Oliver_at_Windsor_Quay_%28cropped%29.jpg")
publisher2 = Publisher.create(title: "W&N", year_established: 1949, primary_genre: "History", image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51p2WSjdh1S._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" )
book2 = user1.books.create(title: "A History of Scotland", length: 434, year_published: 2009, author_id: author2.id, publisher_id: publisher2.id, cover: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51p2WSjdh1S._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")


puts "seeding done!"
