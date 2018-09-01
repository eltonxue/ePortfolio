var main = function() {
  function checkElementActive(element) {
    var elementNav = '#nav-' + element

    var elementID = '#' + element

    if (element == 'home') {
      var elemTop = 0
      var elemBottom =
        $('#education-and-skills').offset().top - $('.navbar').height() - 15
    } else {
      var elemTop = $(elementID).offset().top - $('.navbar').height() - 15
      var elemBottom = elemTop + $(elementID).height() + 44
    }

    var docViewTop = $(window).scrollTop() - $('.navbar').height() + 50
    var docViewBottom = docViewTop + $(window).height()

    if (
      elemTop <= docViewTop &&
      elemBottom >= docViewTop &&
      elemBottom >= docViewTop
    ) {
      $(elementNav).addClass('active')
    } else {
      $(elementNav).removeClass('active')
    }
  }

  function elementTop(element) {
    return $(element).offset().top + 100
  }

  function animateID(id, time, wait) {
    setTimeout(function() {
      $(id).animate({ opacity: '1' }, time)
    }, wait)
  }

  function animateArray(idArray, speed, interval) {
    var timeout = 0
    for (var i = 0; i < idArray.length; ++i) {
      animateID(idArray[i], speed, timeout)
      timeout += interval
    }
  }

  function animateHome() {
    var homeArray = [
      '#profile-pic',
      '#introduction',
      '#web-nav-experience',
      '#web-nav-education-and-skills',
      '#web-nav-portfolio'
    ]

    animateArray(homeArray, 1200, 200)
  }

  animateHome()

  function animateEducationAndSkills() {
    var educArray = [
      '#education-header',
      '#education-details',
      '#skills-header',
      '#fade-languages',
      '#fade-frameworks',
      '#fade-knowledge'
    ]
    animateArray(educArray, 1200, 200)
  }

  function animateExperience() {
    var expArray = [
      '#experience-header',
      '#job-7',
      '#job-6',
      '#job-5',
      '#job-4',
      '#job-3',
      '#job-2',
      '#job-1'
    ]
    animateArray(expArray, 1200, 200)
  }

  function animatePortfolio() {
    var portArray = [
      '#portfolio-header',
      '#project-redirect-6',
      '#project-redirect-5',
      '#project-redirect-4',
      '#project-redirect-3',
      '#project-redirect-2',
      '#project-redirect-1'
    ]
    animateArray(portArray, 1200, 200)
  }

  var scrollBug = true

  $(window).scroll(function(event) {
    var docViewTop = $(window).scrollTop()
    var docViewBottom = docViewTop + $(window).height()

    if (elementTop('#education-and-skills') - 165 <= docViewTop) {
      scrollBug = false
      $('.navbar').fadeIn(200)
    } else {
      $('.navbar').fadeOut(200)
    }
    if (
      elementTop('#education-and-skills') - 160 <= docViewTop &&
      elementTop('#experience') - 160 >= docViewTop
    ) {
      $('.navbar').css('border-bottom-color', 'darkgrey')
    } else if (
      elementTop('#experience') - 160 <= docViewTop &&
      elementTop('#portfolio') - 160 >= docViewTop
    ) {
      $('.navbar').css('border-bottom-color', 'teal')
    } else if (elementTop('#portfolio') - 160 <= docViewTop) {
      $('.navbar').css('border-bottom-color', 'skyblue')
    } else {
      $('.navbar').css('border-bottom-color', 'lightgrey')
    }

    if (elementTop('#education-and-skills') <= docViewBottom) {
      animateEducationAndSkills()
    }

    if (elementTop('#experience') <= docViewBottom) {
      animateExperience()
    }

    if (elementTop('#portfolio') <= docViewBottom) {
      animatePortfolio()
    }

    checkElementActive('home')
    checkElementActive('education-and-skills')
    checkElementActive('experience')
    checkElementActive('portfolio')
  })

  function slideViewTo(element) {
    if (scrollBug && (element == '#experience' || element == '#portfolio')) {
      elemTop = $(element).offset().top - $('.navbar').height() - 15
    } else if (scrollBug && element == '#portfolio') {
      elemTop = $(element).offset().top - $('.navbar').height() - 15
    } else {
      elemTop = $(element).offset().top - $('.navbar').height() - 15
    }

    $('html, body').animate({ scrollTop: elemTop }, 1000)
  }

  $('#web-nav-home').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1000)
  })

  $('#nav-home').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1000)
  })

  $('#nav-education-and-skills').click(function() {
    slideViewTo('#education-and-skills')
  })

  $('#web-nav-education-and-skills').click(function() {
    slideViewTo('#education-and-skills')
  })

  $('#nav-experience').click(function() {
    slideViewTo('#experience')
  })

  $('#web-nav-experience').click(function() {
    slideViewTo('#experience')
  })

  $('#nav-portfolio').click(function() {
    slideViewTo('#portfolio')
  })

  $('#web-nav-portfolio').click(function() {
    slideViewTo('#portfolio')
  })

  $('#slide-down-icon').click(function() {
    slideViewTo('#education-and-skills')
  })

  $('#slide-up-icon').click(function() {
    slideViewTo('#home')
  })

  $('#slide-down-icon').hover(
    function() {
      $(this).animate({ marginTop: '10%' }, 200)
    },
    function() {
      $(this).animate({ marginTop: '0%' }, 200)
    }
  )

  $('#project-redirect-1').click(function() {
    window.location.href = 'https://github.com/eltonxue/Toobular'
  })

  $('#project-redirect-2').click(function() {
    window.location.href = 'https://github.com/eltonxue/Minder'
  })

  $('#project-redirect-3').click(function() {
    window.location.href = 'https://github.com/eltonxue/AceIt'
  })

  $('#project-redirect-4').click(function() {
    window.location.href = 'https://github.com/eltonxue/swerve'
  })

  $('#project-redirect-5').click(function() {
    window.location.href = 'https://github.com/eltonxue/fablix'
  })

  $('#project-redirect-6').click(function() {
    window.location.href = 'https://github.com/grantkayes/coreoverflow'
  })

  $('#project-redirect-7').click(function() {
    window.location.href = 'https://github.com/eltonxue/save'
  })

  $('#view-resume').click(function() {
    window.open('Elton_Xue_Resume.pdf')
  })

  $('#linkedin').click(function() {
    window.open('https://www.linkedin.com/in/eltonxue')
  })

  $('#github').click(function() {
    window.open('https://www.github.com/eltonxue')
  })

  $('#facebook').click(function() {
    window.open('https://www.facebook.com/elton.xue')
  })

  $('#email').click(function() {
    window.location.href = 'mailto:me@eltonxue.com'
  })
}

$(document).ready(main)
