const person={
  name: ['Code','mafia'],
  gender: 'male',
  age: 29,
  interests: {
    music: 'Piano',
    sports: 'soccer',
  },
  getFullName: function(){
    console.log(this.name[0]+this.name[1]);
  }
};

console.log(person.name[1]);
console.log(person.interests);
console.log(person.interests.music);
person.age=12
console.log(person.age);
person.getFullName();