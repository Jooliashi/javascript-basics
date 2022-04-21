function penultimate(string) {
  console.log(string.split(' ')[string.split(' ').length - 2]);
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"