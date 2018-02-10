// Your code goes here:


let picSwap = function(event) {

  let theImage = jQuery(event.target)

  let srcValue = theImage.attr("src")

  jQuery(jQuery("#main-image")).attr("src", srcValue)

//  window.alert("swap")

}

// copy dice function javascript. Test function to get img source in console.

let filmName = function(event) {

  let theImage = jQuery(event.target)
  console.log("Got a click event:", event)
  let srcValue = theImage.attr("src")
  console.log(srcValue)
}

// calls test function to show correct film source in console.
// jQuery("#thumbnails").on("click", filmName)


// actual $ used to swap pictures using the thumbnail ID from HTML
jQuery("#thumbnails").on("click", picSwap)
