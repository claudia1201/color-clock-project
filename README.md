## Color Clock

### Description

This assignment serves to reinforce JS fundamentals with `setInterval`, writing to the DOM, practicing CSS animations, positions, and transforms, and finally breaking down complex problems into simple sequences in code.

## Objectives

### Learning Objectives

After completing this assignment, I was able to:

* Have mastery of general JS syntax
* Be able to write a series of functions that achieve a series of steps
* Understand arrays and loops, Math operations, String operations, and jQuery accessors

### Performance Objectives

After completing this assignment, I was able to effectively use:

* The install tools and processes given to me to build a site with SCSS and JS
* `gh-pages`
* DRY code that is clean, readable, and testable


The color clock should do the following things:

* Every second, convert the current time to a CSS color and set the background color of the page equal to that color. There's a specific way I want you to do this, detailed below.
* Show the current time on the page, updating every second. Use a 24 hour time clock instead of AM/PM.
* When a user clicks on the time, show the current CSS color's hex code instead (this also updates every second)
* When a user clicks on the hex code, show the time instead
* Show the time (or hex code) vertically centered and horizontally centered in the page.

**Converting time to color:**

The hour, minute, and second values in the current time should correspond to the red, blue, and green values in a CSS color, respectively. 