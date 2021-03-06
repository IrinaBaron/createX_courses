document.addEventListener('DOMContentLoaded', () => {
  try {

    const swiper7 = new Swiper('.may-also__swiper', {
      // Optional parameters
      slidesPerView: 3,
      spaceBetween: 30,
      direction: 'horizontal',
      loop: false,
  
      navigation: {
        nextEl: '.may-also__container .swiper-button-next',
        prevEl: '.may-also__container .swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        571: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
  
    });


    let listsBlogs = document.querySelectorAll('.may-also__swiper .swiper-slide');

    listsBlogs.forEach(item => {
      item.addEventListener('click', e => {
        window.location.href = 'blog-info.html';
      })
      item.addEventListener('keyup', e => {
        if (e.code == 'Enter') {
          window.location.href = 'blog-info.html';
        }
      })
    })


  } catch (error) {
    console.log(error)
  }




})
document.addEventListener('DOMContentLoaded', () => {
  try {
    const list = document.querySelector('.journal__blog');
    const inputSearchBlog = document.querySelector('.journal__input');
    let btnsBlog = document.querySelectorAll('.journal__btn');
    let selectBlog = document.querySelector('.journal__box .events__select')
    let listBlogs = document.querySelectorAll('.journal__blog .posts__item');

    listBlogs.forEach(item => {
      item.addEventListener('click', e => {
        window.location.href = 'blog-info.html';
      })
      item.addEventListener('keyup', e => {
        if (e.code == 'Enter') {
          window.location.href = 'blog-info.html';
        }
      })
    })

    btnsBlog.forEach(btn => {
      btn.addEventListener('click', e => {
        let text = e.target.textContent.split('');
        text.pop();
        text = text.join('');

        cleanBlogList();
        searchActiveBtns();
        e.target.classList.toggle('active');

        if (text.toLowerCase().includes('al')) {
          listBlogs.forEach(item => {
            item.style.display = 'block';
            item.style.maxWidth = '100%';
            list.style.display = 'grid';
          })
          return
        }

        let elems = document.querySelectorAll(`.posts__view.${text.toLowerCase()}`);
        showElements(elems)

      })
    });

    selectBlog.addEventListener('input', e => {
      let value = selectBlog.value;

      cleanBlogList();
      let elements = document.querySelectorAll('.journal__blog .direct');
      if (value.toLowerCase().includes('al')) {
        listBlogs.forEach(item => {
          item.style.display = 'block';
          item.style.maxWidth = '100%';
          list.style.display = 'grid';
        })
        return
      }
      elements.forEach(elem => {
        let parentElem = elem.parentElement;
        let parent = parentElem.parentElement;
        if (value === elem.textContent.toLocaleLowerCase()) {
          list.style.display = 'flex';
          list.style.justifyContent = 'space-between';
          list.style.flexWrap = 'wrap';
          parent.style.display = 'block';
          parent.style.maxWidth = '390px';
        }
      })

    });

    inputSearchBlog.addEventListener('input', e => {
      let value = inputSearchBlog.value;

      cleanBlogList();
      if (value == '') {
        listBlogs.forEach(item => {
          item.style.display = 'block';
          item.style.maxWidth = '100%';
          list.style.display = 'grid';
        })
        return
      };

      let textsSearch = document.querySelectorAll('.journal__blog .posts__list_title');
      textsSearch.forEach(text => {
        if (text.textContent.toLowerCase().includes(value)) {
          let parent = text.parentElement;
          list.style.display = 'flex';
          list.style.justifyContent = 'space-between';
          list.style.flexWrap = 'wrap';
          parent.style.display = 'block';
          parent.style.maxWidth = '390px';
        }
      })
    })

    function showElements(elems) {
      elems.forEach(elem => {
        list.style.display = 'flex';
        list.style.justifyContent = 'space-between';
        list.style.flexWrap = 'wrap';
        let parent = elem.parentElement;
        parent.style.display = 'block';
        parent.style.maxWidth = '390px';

      })
    }


    function searchActiveBtns() {
      for (let i = 0; i < btnsBlog.length; i++) {
        if (btnsBlog[i].classList.contains('active')) {
          btnsBlog[i].classList.remove('active');
        }
      }
    }

    function cleanBlogList() {
      listBlogs.forEach(list => {
        list.style.display = 'none';
      });
    }






  } catch (error) {
    console.log(error);
  }
});
document.addEventListener('DOMContentLoaded', () => {

  try {
    const swiper2 = new Swiper('.check-courses__swiper', {
  
      slidesPerView: 2,
      spaceBetween: 29,
      navigation: {
        nextEl: '.check-courses .swiper-button-next',
        prevEl: '.check-courses .swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        570: {
          slidesPerView: 2,
          spaceBetween: 29,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 29,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 29,
        },
      }
    });


    let accBtns = document.querySelectorAll('.course-program__btn');
    let conts = document.querySelectorAll('.course-program__content');
    let accIcons = document.querySelectorAll('.course-program__icons');
    
    accBtns.forEach(accBtn => {
      accBtn.addEventListener('click', e => {
        if (e.target.closest('.show')) {
          e.target.classList.remove('show');
          e.target.nextElementSibling.classList.remove('show');
          e.target.parentNode.previousElementSibling.classList.remove('show');
        } else {
          for (let i = 0; i < accBtns.length; i++) {
            if (accBtns[i].classList.contains('show')) {
              accBtns[i].classList.remove('show');
              conts[i].classList.remove('show');
              accIcons[i].classList.remove('show');
            }
          }
          e.target.classList.toggle('show');
          e.target.nextElementSibling.classList.toggle('show'); 
          e.target.parentNode.previousElementSibling.classList.toggle('show')
        }
      })
      return
      })
    
  } catch (error) {
    console.log(error)
  }
});
document.addEventListener('DOMContentLoaded', () => {

  try {

    const btnVisible = document.querySelector('.online__more');
    const inputSearchCourses = document.querySelector('.online__input');
    const btnSearchCourses = document.querySelector('.online__search');
    let courses = document.querySelectorAll('.online__item');

    document.querySelector('.num-all').textContent = courses.length;

    let marketings = document.querySelectorAll('.marketing');
    document.querySelector('.num-marketing').textContent = marketings.length;

    let managements = document.querySelectorAll('.management');
    document.querySelector('.num-management').textContent = managements.length;

    let hrs = document.querySelectorAll('.hr');
    document.querySelector('.num-hr').textContent = hrs.length;

    let designs = document.querySelectorAll('.design');
    document.querySelector('.num-design').textContent = designs.length;

    let developments = document.querySelectorAll('.development');
    document.querySelector('.num-development').textContent = developments.length;

    let btns = document.querySelectorAll('.online__btn');

    function hideElements() {
      for (let k = 9; k < courses.length; k++) {
        let course = courses[k];
        course.style.display = 'none';
      }
      return
    }
    hideElements();

    btnVisible.addEventListener('click', showHideElements);
    btnVisible.addEventListener('keyup', (e) => {
      if (e.code == 'Enter') {
        showHideElements();
        return
      }
    });

    btnSearchCourses.addEventListener('click', showDirect);

    inputSearchCourses.addEventListener('keyup', e => {
      if (e.code == 'Enter') {
        showDirect();
      }
    });

    inputSearchCourses.addEventListener('input', showDirect);

    function showDirect() {
      let value = inputSearchCourses.value.toLowerCase().trim();
      btnVisible.style.display = 'none'
      courses.forEach(course => {
        course.style.display = 'none';
      });
      if (value == '') {
        value = 'all';
        showNineElements();
        return
      }
      searchCourse(value);

      return
    }

    function showNineElements() {
      btnVisible.style.display = 'unset';
      courses.forEach(course => {
        course.style.display = 'block';
        hideElements();
      });

      document.querySelector('.online__list').style.justifyContent = 'space-between';
    }

    function showHideElements(e) {
      if (e.target.textContent.includes('hide')) {
        hideElements();
        btnVisible.textContent = 'Load more';
        return
      }
      courses.forEach(course => {
        course.style.display = 'block';
      });
      btnVisible.textContent = 'hide elements';
      return
    }

    function searchActive() {
      for (let i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains('active')) {
          btns[i].classList.remove('active');
        }
      }
    }

    btns.forEach(btn => {
      btn.addEventListener('click', tabDirect);
      btn.addEventListener('keyup', e => {
        if (e.code == 'Enter') {
          tabDirect();
        }
      })
    })

    function tabDirect(e) {
      console.log(e.target.textContent) //???? ??????????????
      btnVisible.style.display = 'none';
      courses.forEach(course => {
        course.style.display = 'none';
      });

      let elem = this.textContent.split('');
      elem.pop();
      elem = elem.join('').toLowerCase();
      if (elem.includes('all')) {
        showNineElements();
      }
      searchCourse(elem);
      if (this.closest('.active')) {
        this.classList.remove('active');
      } else {
        searchActive();
        this.classList.toggle('active');
      };
    }

    function searchCourse(direct) {
      if (direct.includes('hr')) {
        direct = direct.split('').slice(0, 2);
        direct = direct.join('');

      }

      let elems = document.querySelectorAll(`.${direct}`);
      elems.forEach(elem => {
        let parent = elem.parentElement;
        let mainParent = parent.parentElement;
        mainParent.style.display = 'block';
        document.querySelector('.online__list').style.justifyContent = 'space-around';
      });
      return
    };



    // console.log(localStorage.getItem(teacherLocal))
  } catch (error) {
    console.log(error);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  try {
    let events = document.querySelectorAll('.events .events__item');
    let numShow = document.querySelector('.events-show');
    // document.querySelector('.events__btns_list').innerHTML = '';
    cleanList();
    let value = 9;
    let pages;
    let btnsPages;

    function createVisibleCards(value) {
      for (let i = 0; i < value; i++) {
        events[i].style.display = 'flex';
      };
      return
    }
    createVisibleCards(value)
    
    
    function createNumPages(value) {
      pages = Math.ceil(events.length / Number(value));
      for (let k = 0; k < pages; k++) {
        let li = document.createElement('li');
        let btnPages = document.createElement('button');
        li.classList.add('events__btns_item');

        btnPages.classList.add('events__page');
        btnPages.textContent = k + 1;
        if (k === 0) {
          btnPages.classList.add('active');
        }

        li.append(btnPages);
        document.querySelector('.events__btns_list').append(li);
      }
      btnsPages = document.querySelectorAll('.events__page');

      btnsPages.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();

          let num = e.target.textContent;
          cleanList();

          if(Number(num) > 1) {
            document.querySelector('.events-prev').removeAttribute('disabled');
          } 
          if(Number(num) === 1) {
            document.querySelector('.events-prev').setAttribute('disabled', true);
          }
          if((Number(num) + 1) > btnsPages.length) {
            document.querySelector('.events-next').setAttribute('disabled', true);
          } else {
            document.querySelector('.events-next').removeAttribute('disabled');
          }

          for (let i = ((num - 1) * value); i < (value * num); i++) {
            cleanBtnsPages();
            e.target.classList.add('active');
            events[i].style.display = 'flex';
          }
          return
        })

      })

    }
    createNumPages(value);

    document.querySelector('.events-next').addEventListener('click', (e) => {
      e.preventDefault();
      btnsPages = document.querySelectorAll('.events__page');
      document.querySelector('.events-prev').removeAttribute('disabled');
      cleanList();

      for (let i = 0; i < btnsPages.length; i++) {
        let btn = btnsPages[i];

        if (btn.classList.contains('active')) {
          cleanBtnsPages();
          
          if((Number(btn.textContent) + 2) > btnsPages.length) {
            document.querySelector('.events-next').setAttribute('disabled', true);
          }
          if ((Number(btn.textContent) + 1) == (Number(btnsPages[i + 1].textContent))) {
            cleanBtnsPages();
            btnsPages[i + 1].classList.add('active');
          }

          for (let j = (Number(btn.textContent) * value); j < (value * (Number(btn.textContent) + 1)); j++) {
            events[j].style.display = 'flex';

          }
          return
        }
      }
      return
    });

    document.querySelector('.events-prev').addEventListener('click', (e) => {
      e.preventDefault();
      btnsPages = document.querySelectorAll('.events__page');
      document.querySelector('.events-next').removeAttribute('disabled');
      cleanList();

      for (let i = 0; i < btnsPages.length; i++) {
        let btn = btnsPages[i];

        if (btn.classList.contains('active')) {
          
          if ((Number(btn.textContent) - 1) === 1) {
            document.querySelector('.events-prev').setAttribute('disabled', true);
          }
          cleanBtnsPages();
          if ((Number(btn.textContent) - 1) == (Number(btnsPages[i - 1].textContent))) {
            cleanBtnsPages();
            btnsPages[i - 1].classList.add('active');
          }
          for (let j = ((Number(btn.textContent) - 2) * value); j < (value * (Number(btn.textContent) - 1)); j++) {
            events[j].style.display = 'flex';
          }

        }

      }
      return
    })

    numShow.addEventListener('input', () => {
      value = numShow.value;
      
      cleanList();

      if (value < 0) {
        numShow.value = 0;
      };
      if (value === '') {
        value = 9;
      };
      document.querySelector('.events-prev').setAttribute('disabled', true);
      document.querySelector('.events-next').removeAttribute('disabled');
      for (let j = 0; j < value; j++) {
        document.querySelector('.events__btns_list').innerHTML = '';
        createNumPages(value);

        events[j].style.display = 'flex';
      };

      return value;
    });

    const btnSquares = document.querySelector('.events-squares');
    const btnRow = document.querySelector('.events-row');

    btnSquares.addEventListener('click', (e) => {
      e.preventDefault();
      btnRow.classList.remove('active');
      btnSquares.classList.add('active');
      document.querySelector('.events__box').classList.add('changed');
    });

    btnRow.addEventListener('click', (e) => {
      e.preventDefault();
      btnSquares.classList.remove('active');
      btnRow.classList.add('active');
      document.querySelector('.events__box').classList.remove('changed');
    });

    document.getElementById('category').addEventListener('input', (e) => {
      cleanList();
      let categories = document.querySelectorAll('.lectures__online');
      
      categories.forEach(cat => {
        if(cat.textContent.includes(e.target.value)) {
          let parents = cat.parentNode;
          
          for(let i = 0; i < events.length; i++) {
            
            if(events[i] == parents.parentNode) {
              events[i].style.display = 'flex';
            } ;
          };
        };
        if(e.target.value.includes('all')) {
          createVisibleCards(value);
        };
      });
      return
    });

    document.querySelector('.events-search').addEventListener('input', (e) => {
      cleanList();
      let elements = document.querySelectorAll('.lectures__info');

      elements.forEach(elem => {
        if(e.target.value === '') {
          createVisibleCards(value);
          return
        };
        if(elem.textContent.toLowerCase().includes(e.target.value)) {
          let parents = elem.parentNode;
          
          for(let i = 0; i < events.length; i++) {
            if(events[i] == parents.parentNode) {
              events[i].style.display = 'flex';
            } ;
          };
          return
        };
        
      })
    });

    function clickOnEventsCard() {
      
      let events = document.querySelectorAll('.lectures__item');
      events.forEach(event => {
        event.addEventListener('click', e => {
          window.location.href='event.html';
        })
        event.addEventListener('keyup', e => {
          if (e.code == 'Enter') {
            window.location.href='event.html';
          }
        })
      })
      return
    }
    clickOnEventsCard();

    function cleanBtnsPages() {
      btnsPages = document.querySelectorAll('.events__page');
      btnsPages.forEach(btn => {
        btn.classList.remove('active');
      })
    };


    function cleanList() {
      events = document.querySelectorAll('.events__item');
      events.forEach(event => {
        event.style.display = 'none';
      });
      return
    }




  } catch (error) {
    console.log(error)
  }
});
/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;

  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (
      el &&
      el !== document &&
      el.nodeName !== 'HTML' &&
      el.nodeName !== 'BODY' &&
      'classList' in el &&
      'contains' in el.classList
    ) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (
      e.target.classList.contains('focus-visible') ||
      e.target.hasAttribute('data-focus-visible-added')
    ) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ??\_(???)_/??
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);

  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

document.addEventListener('DOMContentLoaded', () => {

  try {
    
    const swiper = new Swiper('.team__swiper', {
      // Optional parameters
      slidesPerView: 4,
      spaceBetween: 30,
      direction: 'horizontal',
      loop: false,
  
      navigation: {
        nextEl: '.team__container .swiper-button-next',
        prevEl: '.team__container .swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        570: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      }
  
    });
    // clickOnEventsCard();
    let events = document.querySelectorAll('.lectures__item');
    events.forEach(event => {
      event.addEventListener('click', e => {
        window.location.href='event.html';
      })
      event.addEventListener('keyup', e => {
        if (e.code == 'Enter') {
          window.location.href='event.html';
        }
      })
    })

    let teams = document.querySelectorAll('.team__img');
    let socials = document.querySelectorAll('.team__social');
  
    for (let i = 0; i < teams.length; i++) {
      let team = teams[i];
      let soc = socials[i];
  
      team.addEventListener('click', () => {
        soc.classList.toggle('show');
      })
  
      soc.addEventListener('click', () => {
        soc.classList.toggle('show')
      })
    }
  
  
    const swiper1 = new Swiper('.say__swiper', {
  
      slidesPerView: 1,
      pagination: {
        el: '.say__swiper .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.say .swiper-button-next',
        prevEl: '.say .swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
  
    });
  
    // -------link-----
    let linksCourses = document.querySelectorAll('.featured__item');
    // let teacherLocal = localStorage.getItem(teacherLocal);
  
    linksCourses.forEach(linkCourse => {
      linkCourse.addEventListener('click', (e) => {
        let teacher = linkCourse.querySelector('.featured__teacher');
        // localStorage.setItem(teacher, teacherLocal);
        // console.log(teacher)
        // e.preventDefault();
        window.location.href='course.html';
        
      })
    })

    // // -----------burger-------------
    document.querySelector('.header-burger').addEventListener('click', () => {
      document.querySelector('.header__item').classList.remove('active');
      document.body.classList.toggle('stop-scrolling');
      document.querySelector('.header-burger').classList.toggle('active');
      document.querySelector('.header__nav').classList.toggle('active');
      if (document.documentElement.clientWidth <= 575) {
        document.querySelector('.header__wrap').classList.toggle('active');
      }
    })
  
    // ------------scroll--------------
    const btnScroll = document.querySelector('.btn__scroll');
    window.addEventListener('scroll', () => {
      let scrollNum = window.pageYOffset;
      document.querySelector('.footer__go');
      document.querySelector('.footer__link_logo');
      if (scrollNum >= '100') {
        btnScroll.style.display = 'block';
        btnScroll.style.position = 'fixed';
        btnScroll.style.bottom = '80px';
        btnScroll.style.right = '40px';
  
      } else {
        btnScroll.style.display = 'none';
      }
  
    }, { passive: true })
  
    let links = document.querySelectorAll('.hero__link');
  
    links.forEach(link => {
      link.addEventListener('click', () => {
        window.scroll({ behavior: 'smooth' })
      })
    })
  
    // -----------tabs------------
  
    let jsTriggers = document.querySelectorAll('.js-tab-trigger'),
      jsContents = document.querySelectorAll('.js-tab-content');
  
    jsTriggers.forEach(function (trigger) { // 1
      trigger.addEventListener('click', function () { // 2
        // ????????!
        let id = this.getAttribute('data-tab'), // 1
          content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'), // 2
          activeTrigger = document.querySelector('.js-tab-trigger.active'), // 3
          activeContent = document.querySelector('.js-tab-content.active'); // 4
  
        activeTrigger.classList.remove('active'); // 1
        trigger.classList.add('active'); // 2
  
        activeContent.classList.remove('active'); // 3
        content.classList.add('active'); // 4
      });
    });
    
    // -------modal------
    const clickModal = document.querySelector('.header__login');
    const modal = document.querySelector('.modal');

    clickModal.addEventListener('click', () => {
      modal.classList.add('modal_active');
      document.body.classList.add('stop-scrolling');
    });

    let closeModal = document.querySelector('.modal .menu__close');
    closeModal.addEventListener('click', () => {
      modal.classList.remove('modal_active');
      document.body.classList.remove('stop-scrolling');
    });

    const clickConsult = document.querySelector('.header__btn');
    const consultation = document.querySelector('.consultation');

    clickConsult.addEventListener('click', () => {
      consultation.classList.add('modal_active');
      document.body.classList.add('stop-scrolling');
    });

    const closeConsult = document.querySelector('.consultation .menu__close');
    closeConsult.addEventListener('click', () => {
      consultation.classList.remove('modal_active');
      document.body.classList.remove('stop-scrolling');
    });
    
  } catch (error) {
    console.log(error)
  }

})

document.addEventListener('DOMContentLoaded', e => {
  try {
    let allEvents = document.querySelectorAll('.interested__swiper .events__item');
    console.log(allEvents.length)
    allEvents.forEach(event => {
      event.style.display = 'flex';
      return
    });

    const swiper5 = new Swiper('.interested__swiper.swiper', {
      // Default parameters
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.interested__container .swiper-button-next',
        prevEl: '.interested__container .swiper-button-prev',
      },
      
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    })

    

  } catch (error) {
    console.log(error)
  }
});