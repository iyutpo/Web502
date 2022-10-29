
class Post {
    constructor(author, date, foodie, bio, message) {
        // this.avatarPath = './images/profile.png';
        this.author = author;
        this.date = date;
        this.message = message;
        this.foodie = foodie;
        this.bio = bio;
    }
}
post1 = new Post('Brianna', 'February 18, 2021 @ 3:30 pm', 'Novoice', 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!', 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!'),
post2 = new Post('LINH', 'February 15, 2021 @ 9:46 am', 'Newcomer', 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.', 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!'),
post3 = new Post('CATHERINE LEONARDO', 'February 13, 2021 @ 12:58 pm', 'Mentor', 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!', 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.'),
post4 = new Post('KALI', 'February 13, 2021 @ 11:31 am', 'Novice', "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!", 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!'),
posts = [post1, post2, post3, post4];
for (let i = 1; i <= 4; i++) {
    document.getElementById('author' + i.toString()).innerHTML = posts[i-1].author;
    document.getElementById('date' + i.toString()).innerHTML = posts[i-1].date;
    document.getElementById('message' + i.toString()).innerHTML = posts[i-1].message;

}

function showDiv1() {
    // $('#author1-diag').html(post1.author);
    document.getElementById('profile1').style.display = "block";
    document.getElementById('author1-diag').innerHTML = post1.author;
    document.getElementById('foodie1-diag').innerHTML = post1.foodie;
    document.getElementById('bio1-diag').textContent = post1.bio;
}

function hideDiv1() {
    document.getElementById('profile1').style.display = 'none';
}

function showDiv2() {
    // $('#author1-diag').html(post1.author);
    document.getElementById('profile2').style.display = "block";
    document.getElementById('author2-diag').innerHTML = post2.author;
    document.getElementById('foodie2-diag').innerHTML = post2.foodie;
    document.getElementById('bio2-diag').textContent = post2.bio;
}

function hideDiv2() {
    document.getElementById('profile2').style.display = 'none';
}

function showDiv3() {
    // $('#author1-diag').html(post1.author);
    document.getElementById('profile3').style.display = "block";
    document.getElementById('author3-diag').innerHTML = post3.author;
    document.getElementById('foodie3-diag').innerHTML = post3.foodie;
    document.getElementById('bio3-diag').textContent = post3.bio;
}

function hideDiv3() {
    document.getElementById('profile3').style.display = 'none';
}

function showDiv4() {
    // $('#author1-diag').html(post1.author);
    document.getElementById('profile4').style.display = "block";
    document.getElementById('author4-diag').innerHTML = post4.author;
    document.getElementById('foodie4-diag').innerHTML = post4.foodie;
    document.getElementById('bio4-diag').textContent = post4.bio;
}

function hideDiv4() {
    document.getElementById('profile4').style.display = 'none';
}