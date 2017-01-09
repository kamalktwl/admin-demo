$(function() {
// Perfect Scrollbar
 $('.button-collapse').sideNav({'edge': 'left'});

$('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      // ready: function() { alert('Ready'); }, // Callback for Modal open
      // complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
          


  });
jQuery(document).ready(function($) {
	  // Perfect Scrollbar
	  var leftnav = $(".page-topbar").height(); 
	    var leftnavHeight = window.innerHeight - leftnav;
	  $('.leftside-navigation').height(leftnavHeight).perfectScrollbar({
	    suppressScrollX: true
	  });
	   
});