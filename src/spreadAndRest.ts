const friends = ["Alice", "Bob", "Charlie"];

const schoolFriends = ["Masum", "Sourav", "Foisal"];

const collegeFriends = ["Shuvo", "Sabbir", "Rafi"];

friends.push(...schoolFriends, ...collegeFriends);

// console.log(friends);

const user = {
  name: "Md Akash",
  phoneNumber: "01700000000",
};

const otherInfo = {
  hobby: "Programming",
  favoriteColor: "Blue",
};

const userInfo = {
  ...user,
  ...otherInfo,
};


// console.log(userInfo);

const sendInvite = (...friends: string[])=>{
   friends.forEach(friend => {
    console.log(`Invitation sent to ${friend}`);
   });
}

sendInvite("Alice", "Bob", "Charlie");
