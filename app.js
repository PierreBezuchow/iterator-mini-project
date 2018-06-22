const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Washington DC',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jenny Clark',
    age: 29,
    gender: 'female',
    lookingFor: 'male',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Eva Blue',
    age: 37,
    gender: 'female',
    lookingFor: 'male',
    location: 'Paris FR',
    image: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    name: 'Frank Sellick',
    age: 45,
    gender: 'male',
    lookingFor: 'female',
    location: 'Berlin DE',
    image: 'https://randomuser.me/api/portraits/men/12.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}