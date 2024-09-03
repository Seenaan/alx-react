import $ from 'jquery';
import _ from 'lodash';

// Create the elements
$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;

  // Define the updateCounter function
  const updateCounter = () => {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  };

  // Use lodash debounce to limit the rate of function execution
  const debouncedUpdateCounter = _.debounce(updateCounter, 300);

  // Bind the click event with debounce
  $('#startButton').on('click', debouncedUpdateCounter);
});
