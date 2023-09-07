
const Technician = [
  {
    name: "Olivia Adams",
    phoneNumber: "555-888-1234",
    payPerHour: 19,
    location: "Oakwood",
    jobRole: "Plumber",
    desc: "Skilled plumber known for quick and efficient fixes on plumbing issues.",
    exp: "10 years",
    image: "https://media.istockphoto.com/id/959806596/photo/repairing-sink.webp?b=1&s=612x612&w=0&k=20&c=EMYO0PWoBCUQl_J4JGynJMZ46kYdqWwQZIcl3_jZVRg="
  },
  {
    name: "Liam Turner",
    phoneNumber: "555-777-2345",
    payPerHour: 24,
    location: "Riverside",
    jobRole: "Bike Repair",
    desc: "Passionate bike mechanic with a knack for repairing all types of bicycles.",
    exp: "8 years",
    image: "https://media.istockphoto.com/id/1525380859/photo/asian-chinese-cyclist-helping-his-team-checking-on-bicycle-chain-at-roadside-in-rural-scene.webp?b=1&s=170667a&w=0&k=20&c=-gcSEEmAnD-NKi46QxadzWqpUMxPOTK2XFx7LZD8ioI="
  },
  {
    name: "Isabella Bell",
    phoneNumber: "555-666-3456",
    payPerHour: 28,
    location: "Highland",
    jobRole: "Ac Technician",
    desc: "Certified AC technician specializing in cooling system maintenance and repairs.",
    exp: "11 years",
    image: "https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWMlMjB0ZWNobmljaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
  },
  {
    name: "Henry Davis",
    phoneNumber: "555-555-4567",
    payPerHour: 21,
    location: "Bridgewater",
    jobRole: "Tire Repair",
    desc: "Dedicated tire repair specialist offering reliable and efficient services.",
    exp: "9 years",
    image: "https://media.istockphoto.com/id/998671020/photo/mechanic-changing-car-tire-at-work.webp?b=1&s=170667a&w=0&k=20&c=0U2fJklxPd_6S1h4nxPV05uNkXbV-oLSaXXQQj3jl2g="
  },
  {
    name: "Ava White",
    phoneNumber: "555-444-5678",
    payPerHour: 22,
    location: "Sunsetville",
    jobRole: "Carpenter",
    desc: "Experienced carpenter known for crafting custom woodworking designs.",
    exp: "14 years",
    image: "https://media.istockphoto.com/id/1420112974/photo/mature-man-cutting-wood-in-workshop.webp?b=1&s=170667a&w=0&k=20&c=INAU36vcOGi5XOCInt85zagPLuZ5iYfODUbp31nDens="
  },
  {
    name: "William Martinez",
    phoneNumber: "555-333-6789",
    payPerHour: 27,
    location: "Greenfield",
    jobRole: "Electrician",
    desc: "Experienced electrician offering quality electrical solutions for homes and businesses.",
    exp: "16 years",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Emma Harris",
    phoneNumber: "555-222-7890",
    payPerHour: 18,
    location: "Hillside",
    jobRole: "Car Repair",
    desc: "Skilled car mechanic specializing in a wide range of automotive repairs.",
    exp: "10 years",
    image: "https://plus.unsplash.com/premium_photo-1661953077639-5572b0fba7f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Noah Scott",
    phoneNumber: "555-111-8901",
    payPerHour: 23,
    location: "Meadowville",
    jobRole: "Bike Repair",
    desc: "Passionate bike enthusiast skilled in repairing various types of bicycles.",
    exp: "6 years",
    image: "https://media.istockphoto.com/id/614415432/photo/this-bike-will-be-perfect.webp?b=1&s=170667a&w=0&k=20&c=-CzhAHIKm5nkMz1KVIwn21tQvqY60lTYpK6zFVBe8jo="
  },
  {
    name: "Oliver Turner",
    phoneNumber: "555-999-9012",
    payPerHour: 25,
    location: "Mountain View",
    jobRole: "Ac Technician",
    desc: "Experienced AC technician offering efficient solutions for cooling needs.",
    exp: "12 years",
    image: "https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWMlMjB0ZWNobmljaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
  },
  {
    name: "Sophia Walker",
    phoneNumber: "555-888-0123",
    payPerHour: 20,
    location: "Harbor City",
    jobRole: "Tire Repair",
    desc: "Tire repair specialist known for thorough and timely services.",
    exp: "9 years",
    image: "https://media.istockphoto.com/id/898487280/photo/handsome-auto-service-mechanics.webp?b=1&s=170667a&w=0&k=20&c=Ba9XDHhGQKGGiho-rsUYKl9tNuTfAa2DCRGMkdK9_Tk="
  },
  {
    name: "James Rodriguez",
    phoneNumber: "555-777-1234",
    payPerHour: 18,
    location: "Willowbrook",
    jobRole: "Plumber",
    desc: "Experienced plumber offering reliable solutions for all plumbing needs.",
    exp: "10 years",
    image: "https://media.istockphoto.com/id/1204813771/photo/male-worker-inspecting-valve.jpg?b=1&s=612x612&w=0&k=20&c=-Qc9czzynqy_laGthgdtI9brX1hdj5ff0k2eVX7ekqk="
  },
  {
    name: "Emma Martinez",
    phoneNumber: "555-666-2345",
    payPerHour: 26,
    location: "Oakwood",
    jobRole: "Bike Repair",
    desc: "Bike mechanic with a passion for fixing and enhancing bicycles.",
    exp: "7 years",
    image: "https://media.istockphoto.com/id/1412861888/photo/woman-fixing-her-bicycle-at-home.webp?b=1&s=170667a&w=0&k=20&c=c4RB3L9i7TsvIdC89kPsrgxD0WGY07VIayMoZYQqX3E="
  },
  {
    name: "Oliver Smith",
    phoneNumber: "555-555-3456",
    payPerHour: 22,
    location: "Riverside",
    jobRole: "Ac Technician",
    desc: "Skilled AC technician specializing in cooling system installations and repairs.",
    exp: "9 years",
    image: "https://media.istockphoto.com/id/1308375457/photo/cleaning-air-conditioner.webp?b=1&s=170667a&w=0&k=20&c=v8LzT5Eyrq2oHZjLZqPMJyCZObA1IFV1L9LFZa48Hps="
  },
  {
    name: "Isabella Johnson",
    phoneNumber: "555-444-4567",
    payPerHour: 20,
    location: "Bridgewater",
    jobRole: "Tire Repair",
    desc: "Tire repair specialist dedicated to providing quality service for all vehicles.",
    exp: "11 years",
    image: "https://images.unsplash.com/photo-1589235308001-4558e36846f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "William Williams",
    phoneNumber: "555-333-5678",
    payPerHour: 24,
    location: "Sunsetville",
    jobRole: "Carpenter",
    desc: "Master carpenter known for custom woodworking and attention to detail.",
    exp: "14 years",
    image: "https://media.istockphoto.com/id/1458711335/photo/male-wood-furniture-joiner-work-in-diy-wooden-workshop-real-authentic-people-worker.webp?b=1&s=170667a&w=0&k=20&c=MYhOSwYt7QwT4c8gBp3lCZZMje4r3QydPKFx4zBN2mI="
  },
  {
    name: "Sophia Davis",
    phoneNumber: "555-222-6789",
    payPerHour: 28,
    location: "Greenfield",
    jobRole: "Electrician",
    desc: "Experienced electrician providing efficient electrical solutions.",
    exp: "15 years",
    image: "https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.webp?b=1&s=170667a&w=0&k=20&c=bFCrpAQVkTsSPxhH3gpY1c6O8rwhXuvBZxpvM8Jgago="
  },
  {
    name: "Noah Harris",
    phoneNumber: "555-111-7890",
    payPerHour: 21,
    location: "Hillside",
    jobRole: "Car Repair",
    desc: "Skilled car mechanic known for diagnosing and fixing complex issues.",
    exp: "12 years",
    image: "https://media.istockphoto.com/id/1423278446/photo/auto-mechanic-service-and-repair.webp?b=1&s=170667a&w=0&k=20&c=QeDkOIsZ_beQqLTLBmVIqsQGhx4iHpP0ioVDAq8LZzM="
  },
  {
    name: "Olivia Turner",
    phoneNumber: "555-999-8901",
    payPerHour: 19,
    location: "Meadowville",
    jobRole: "Bike Repair",
    desc: "Passionate bike mechanic offering quick and reliable bicycle repairs.",
    exp: "8 years",
    image: "https://plus.unsplash.com/premium_photo-1663046044224-524bf6295edc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Liam Martinez",
    phoneNumber: "555-888-9012",
    payPerHour: 23,
    location: "Mountain View",
    jobRole: "Ac Technician",
    desc: "Certified AC technician specializing in maintaining and repairing cooling systems.",
    exp: "10 years",
    image: "https://media.istockphoto.com/id/1417100397/photo/technician-cleaning-air-conditioner-filter.webp?b=1&s=170667a&w=0&k=20&c=xGkkqMnBdaGf9Yt8IklAwtCHsAeacEp6e6RzqDvYKK4="
  },
  {
    name: "Ava Rodriguez",
    phoneNumber: "555-777-0123",
    payPerHour: 25,
    location: "Harbor City",
    jobRole: "Tire Repair",
    desc: "Dedicated tire repair specialist with a focus on safety and quality service.",
    exp: "13 years",
    image: "https://plus.unsplash.com/premium_photo-1683742711459-1f856a72d0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGlyZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }, {
    name: "Ethan Smith",
    phoneNumber: "555-666-1234",
    payPerHour: 18,
    location: "Willowbrook",
    jobRole: "Plumber",
    desc: "Experienced plumber offering efficient and reliable plumbing services.",
    exp: "9 years",
    image: "https://media.istockphoto.com/id/1312311812/photo/man-installing-pipe-system-of-bathtub-with-hydromassage.jpg?b=1&s=612x612&w=0&k=20&c=kto5E8NXxbuxNNStnMZHGL8qIVNCjXqDqrm-Qzt6ESo="
  },
  {
    name: "Olivia Johnson",
    phoneNumber: "555-555-2345",
    payPerHour: 24,
    location: "Oakwood",
    jobRole: "Bike Repair",
    desc: "Bike enthusiast skilled in repairing and maintaining bicycles of all types.",
    exp: "6 years",
    image: "https://images.unsplash.com/photo-1600920716019-2da25833765d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpa2UlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Noah Williams",
    phoneNumber: "555-444-3456",
    payPerHour: 22,
    location: "Riverside",
    jobRole: "Ac Technician",
    desc: "Certified AC technician offering comprehensive cooling system solutions.",
    exp: "10 years",
    image: "https://media.istockphoto.com/id/1497128676/photo/air-conditioner-repairman-works-on-home-unit.webp?b=1&s=170667a&w=0&k=20&c=lHc5qwU1NCjyMRtAG5lBnm8mM6zDZGaVOUN88JwhFoc="
  },
  {
    name: "Emma Davis",
    phoneNumber: "555-333-4567",
    payPerHour: 19,
    location: "Bridgewater",
    jobRole: "Tire Repair",
    desc: "Tire repair specialist known for prompt and reliable service.",
    exp: "7 years",
    image: "https://images.unsplash.com/photo-1671790731634-1f72f1785331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRpcmUlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Liam Anderson",
    phoneNumber: "555-222-5678",
    payPerHour: 25,
    location: "Sunsetville",
    jobRole: "Carpenter",
    desc: "Experienced carpenter skilled in creating custom woodworking designs.",
    exp: "13 years",
    image: "https://plus.unsplash.com/premium_photo-1664302193681-8f87ec91a5de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycGVudGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Ava Wilson",
    phoneNumber: "555-111-6789",
    payPerHour: 28,
    location: "Greenfield",
    jobRole: "Electrician",
    desc: "Dedicated electrician offering safe and efficient electrical solutions.",
    exp: "14 years",
    image: "https://media.istockphoto.com/id/1428071835/photo/man-an-electrical-technician-working-in-a-switchboard-with-fuses.webp?b=1&s=170667a&w=0&k=20&c=kFX1gzlbwPYMuu635JUHNUsOaec0XrpIWAaYh-QVtJE="
  },
  {
    name: "James Walker",
    phoneNumber: "555-999-7890",
    payPerHour: 21,
    location: "Hillside",
    jobRole: "Car Repair",
    desc: "Auto mechanic known for diagnosing and repairing vehicles of all makes.",
    exp: "11 years",
    image: "https://media.istockphoto.com/id/1368159665/photo/checking-the-engine-oil-level-auto-repair-shop-or-auto-service.webp?b=1&s=170667a&w=0&k=20&c=VDh81wRTZI7FuUXczqkd6k10iS3z5TK-r3PBWLtq46g="
  },
  {
    name: "Oliver Turner",
    phoneNumber: "555-888-8901",
    payPerHour: 23,
    location: "Meadowville",
    jobRole: "Bike Repair",
    desc: "Passionate bike mechanic skilled in various bicycle repairs and modifications.",
    exp: "8 years",
    image: "https://images.unsplash.com/photo-1452980904795-dc36a4d90da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2UlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Emma Rodriguez",
    phoneNumber: "555-777-9012",
    payPerHour: 20,
    location: "Mountain View",
    jobRole: "Ac Technician",
    desc: "Certified AC technician experienced in servicing and repairing cooling systems.",
    exp: "12 years",
    image: "https://media.istockphoto.com/id/489211146/photo/air-conditioner-repairman-works-on-home-unit-blue-collar-worker.jpg?s=612x612&w=0&k=20&c=bv18SUuuCiHkUZQ3qhzpYzqHufQ5povoyWy2h5U85RM="
  },
  {
    name: "William Brown",
    phoneNumber: "555-666-0123",
    payPerHour: 26,
    location: "Harbor City",
    jobRole: "Tire Repair",
    desc: "Skilled tire repair specialist offering reliable and efficient solutions.",
    exp: "10 years",
    image: "https://plus.unsplash.com/premium_photo-1661372060690-964da79ed5f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRpcmUlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  }, {
    name: "Sophia Wilson",
    phoneNumber: "555-555-1234",
    payPerHour: 19,
    location: "Willowbrook",
    jobRole: "Plumber",
    desc: "Experienced plumber offering efficient and effective plumbing solutions.",
    exp: "8 years",
    image: "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Liam Harris",
    phoneNumber: "555-444-2345",
    payPerHour: 25,
    location: "Oakwood",
    jobRole: "Bike Repair",
    desc: "Bike enthusiast skilled in repairing and customizing bicycles.",
    exp: "7 years",
    image: "https://media.istockphoto.com/id/833171812/photo/we-look-forward-to-serving-you.webp?b=1&s=170667a&w=0&k=20&c=YniyAzxLYske1_T9WCRzGQptNQ44ng9YbePM7dky8-w="
  },
  {
    name: "Olivia Martinez",
    phoneNumber: "555-333-3456",
    payPerHour: 21,
    location: "Riverside",
    jobRole: "Ac Technician",
    desc: "Certified AC technician with expertise in cooling system maintenance.",
    exp: "9 years",
    image: "https://media.istockphoto.com/id/489213622/photo/air-conditioner-repairmen-work-on-home-unit-blue-collar-workers.jpg?s=612x612&w=0&k=20&c=ZBdFmK3jvUznAOZ24YMo9PPArPx3GMjtRirpqxWY-j4="
  },
  {
    name: "Noah Davis",
    phoneNumber: "555-222-4567",
    payPerHour: 20,
    location: "Bridgewater",
    jobRole: "Tire Repair",
    desc: "Dedicated tire repair specialist known for reliable service.",
    exp: "6 years",
    image: "https://cdn.pixabay.com/photo/2020/06/16/23/45/boy-5307568_640.jpg"
  },
  {
    name: "Emma Smith",
    phoneNumber: "555-111-5678",
    payPerHour: 24,
    location: "Sunsetville",
    jobRole: "Carpenter",
    desc: "Experienced carpenter skilled in crafting unique woodworking projects.",
    exp: "11 years",
    image: "https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnBlbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Ava Miller",
    phoneNumber: "555-999-6789",
    payPerHour: 27,
    location: "Greenfield",
    jobRole: "Electrician",
    desc: "Dedicated electrician offering comprehensive electrical solutions.",
    exp: "12 years",
    image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "James Wilson",
    phoneNumber: "555-888-7890",
    payPerHour: 22,
    location: "Hillside",
    jobRole: "Car Repair",
    desc: "Auto mechanic known for precise and efficient vehicle repairs.",
    exp: "10 years",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcmVwYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Oliver Taylor",
    phoneNumber: "555-777-8901",
    payPerHour: 23,
    location: "Meadowville",
    jobRole: "Bike Repair",
    desc: "Passionate bike mechanic skilled in repairing and tuning bicycles.",
    exp: "9 years",
    image: "https://media.istockphoto.com/id/1140335977/photo/caucasian-dedicated-man-putting-tyre-on-bicycle-wheel-while-standing-in-workshop.webp?b=1&s=170667a&w=0&k=20&c=RZ6C77CvDibPJxSLTrM1nFHkQLbwa21GSEPsklHjLVI="
  },
  {
    name: "Sophia Anderson",
    phoneNumber: "555-666-9012",
    payPerHour: 18,
    location: "Mountain View",
    jobRole: "Ac Technician",
    desc: "Certified AC technician with a focus on cooling system diagnostics.",
    exp: "7 years",
    image: "https://media.istockphoto.com/id/531884229/photo/air-conditioner-repairmen-work-on-home-unit-blue-collar-workers.jpg?s=612x612&w=0&k=20&c=nq-iDKmyxXEKO3RYm5CQZ6Jz26qZDkilVpqOFhItUrU="
  },
  {
    name: "Liam Rodriguez",
    phoneNumber: "555-555-0123",
    payPerHour: 26,
    location: "Harbor City",
    jobRole: "Tire Repair",
    desc: "Skilled tire repair specialist offering fast and reliable solutions.",
    exp: "11 years",
    image: "https://plus.unsplash.com/premium_photo-1661371877268-176144d770ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRpcmUlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  }, {
    name: "Michael Johnson",
    phoneNumber: "555-567-8901",
    payPerHour: 32,
    location: "Downtown",
    jobRole: "Engine Work",
    desc: "Skilled engine mechanic with expertise in diagnosing and repairing complex engine issues.",
    exp: "20 years",
    image: "https://previews.123rf.com/images/stocking/stocking1409/stocking140900095/31662263-mechanic-working-on-a-car-engine.jpg"
  },

  {
    name: "Olivia Miller",
    phoneNumber: "555-678-9012",
    payPerHour: 27,
    location: "Uptown",
    jobRole: "Dent and Paint Work",
    desc: "Experienced in dent repair and providing flawless paintwork for vehicles of all types.",
    exp: "14 years",
    image: "https://lirp.cdn-website.com/bcdf09834dc844cabd6e26d49d2f393a/dms3rep/multi/opt/5+Dangers+of+Delaying+Auto+Body+Dent+Repair-1920w.jpg"
  },

  {
    name: "Ella Brown",
    phoneNumber: "555-789-0123",
    payPerHour: 20,
    location: "Suburbia",
    jobRole: "House Cleaning",
    desc: "Detail-oriented house cleaner committed to delivering a spotless home environment.",
    exp: "11 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRwPso6YBbI2psRpgmxFDcV8poJXRumz0xg&usqp=CAU"
  },
  {
    name: "John Smith",
    phoneNumber: "555-123-4567",
    payPerHour: 30,
    location: "Cityville",
    jobRole: "Engine Work",
    desc: "Experienced mechanic specializing in engine repairs and maintenance.",
    exp: "15 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbyoRlJG-D_5ShEBk-aIjarzKrjd2eqF508crq9wgGYQCfa05h5acnxfQn7kWlRI2T4A&usqp=CAU"
  },

  {
    name: "Sara Johnson",
    phoneNumber: "555-234-5678",
    payPerHour: 25,
    location: "Suburbia",
    jobRole: "Dent and Paint Work",
    desc: "Skilled in repairing dents and providing high-quality paintwork for vehicles.",
    exp: "12 years",
    image: "https://www.automoblog.net/wp-content/uploads/2020/04/PDR.jpg.webp"
  },
  {
    name: "Michael Johnson",
    phoneNumber: "555-567-8901",
    payPerHour: 32,
    location: "Downtown",
    jobRole: "Engine Work",
    desc: "Skilled engine mechanic with expertise in diagnosing and repairing complex engine issues.",
    exp: "20 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oIlXEGbnUJ-bhEpxO2zzUf5fra9KKKXtW99r6yA9JZBjLfRdHYN3A4NNOwEf3FFnj-E&usqp=CAU"
  },

  {
    name: "Starc",
    phoneNumber: "555-678-9012",
    payPerHour: 27,
    location: "Uptown",
    jobRole: "Dent and Paint Work",
    desc: "Experienced in dent repair and providing flawless paintwork for vehicles of all types.",
    exp: "14 years",
    image: "https://vasantmotorsvizag.com/wp-content/uploads/2021/03/car-dent-blog.jpg"
  },

  {
    name: "javing sha ",
    phoneNumber: "555-789-0123",
    payPerHour: 40,
    location: "Suburbia",
    jobRole: "House Cleaning",
    desc: "Detail-oriented house cleaner committed to delivering a spotless home environment.",
    exp: "15 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmxbn6Ohvk7TTUXpbc42y6IhPqilV01eWrw&usqp=CAU"
  },

  {
    name: "William Jackson",
    phoneNumber: "555-890-1234",
    payPerHour: 30,
    location: "Metropolis",
    jobRole: "Electrical Work",
    desc: "Master electrician known for efficient and safe electrical installations and repairs.",
    exp: "22 years",
    image: "data:image/jpeg;base64,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"
  },

  {
    name: "Sarah White",
    phoneNumber: "555-234-5678",
    payPerHour: 31,
    location: "Downtown",
    jobRole: "Engine Work",
    desc: "Expert engine technician with a track record of solving complex engine problems.",
    exp: "18 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxdFLXEiU8V-stOJoki2A1E5qOIV-orqZPeeKMEOskxabE749-Gffab17t_uipUas03M&usqp=CAU"
  },

  {
    name: "Liam Taylor",
    phoneNumber: "555-345-6789",
    payPerHour: 26,
    location: "Uptown",
    jobRole: "Dent and Paint Work",
    desc: "Skilled in dent repair and transforming vehicles with high-quality paintwork.",
    exp: "12 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfYZGFh662y34qax6QGttboTl-Boa3F33DA&usqp=CAU"
  },

  {
    name: "Ava Johnson",
    phoneNumber: "555-456-7890",
    payPerHour: 21,
    location: "Suburbia",
    jobRole: "House Cleaning",
    desc: "Experienced house cleaner dedicated to creating clean and organized spaces.",
    exp: "9 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JyNN64w1y53kF_fMgsiCg2d8K7yzMpag5Tc4oPxZKdgaQUDe8TNVbnSIbjhEiM5pOh8&usqp=CAU"
  },


  {
    name: "Ethan Clark",
    phoneNumber: "555-567-8901",
    payPerHour: 29,
    location: "Metropolis",
    jobRole: "Electrical Work",
    desc: "Certified electrician with expertise in electrical system installations and repairs.",
    exp: "16 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKqnVFuTfcFxNg_bEeOrhEi0xiE09uKoYMA&usqp=CAU"
  },


  {
    name: "Emily Davis",
    phoneNumber: "555-345-6789",
    payPerHour: 18,
    location: "Townsville",
    jobRole: "House Cleaning",
    desc: "Thorough and reliable house cleaner offering top-notch cleaning services.",
    exp: "10 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1G0AetCnlGGbN70LeGAsvHUI_TTb3gQXbrgrjsmg4PG3xdEPiMgG5U78J2vX3TAkb07A&usqp=CAU"
  },


  {
    name: "Daniel Wilson",
    phoneNumber: "555-456-7890",
    payPerHour: 28,
    location: "Metropolis",
    jobRole: "Electrical Work",
    desc: "Certified electrician providing electrical solutions for residential and commercial clients.",
    exp: "18 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8FoVBPq2hEtwo9RRl5hu6i__yd455pWntA&usqp=CAU"
  },


  {
    name: "William Jackson",
    phoneNumber: "555-890-1234",
    payPerHour: 30,
    location: "Metropolis",
    jobRole: "Electrical Work",
    desc: "Master electrician known for efficient and safe electrical installations and repairs.",
    exp: "22 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqsyf7gcZ36DJ-XPpP_wGNNL3bj1JaZWMDg&usqp=CAU"
  },
];

export default Technician;