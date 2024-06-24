function skillsMember() {
    let skills = ["HTML", "CSS", "JavaScript"];
    // console.log(this);
    skills.forEach(function(skill) {
        // console.log(this);
        // console.log(`${this.name} knows ${skill}`);
    }, this);
}