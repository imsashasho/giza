{
  const donationBtns = document.querySelectorAll('.donation-card__title');

  donationBtns.forEach((accordion) => {
    accordion.addEventListener('click', () => {
      accordion.classList.toggle('is-active');

      const content = accordion.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  });

  const requaritiesRef = document.querySelectorAll('.donation-card__details-text-container');

  requaritiesRef.forEach((item) => {
    item.addEventListener('click', async (event) => {
      if (!navigator.clipboard) {
        // Clipboard API is not available
        return;
      }
      try {
        await navigator.clipboard.writeText(event.target.innerText);
      } catch (err) {
        console.error('Failed to copy!', err);
      }
    });
  });

  const breakpoints = {
    desktop: 1919,
    tabletLarge: 1365,
    tablet: 767,
    mobile: 767,
  };

  const itemsInRow = {
    desktop: 4,
    tabletLarge: 3,
    tablet: 2,
    mobile: 1,
  };

  const isDesktop = windowWith => windowWith > breakpoints.desktop;

  const isTabletLarge = windowWith => windowWith >= breakpoints.tabletLarge && windowWith <= breakpoints.desktop;

  const isTablet = windowWith => windowWith >= breakpoints.mobile && windowWith <= breakpoints.tabletLarge;

  const isMobile = windowWith => windowWith < breakpoints.mobile;

  const getItemsInRow = (windowWith) => {
    if (isDesktop(windowWith)) return itemsInRow.desktop;
    if (isTablet(windowWith)) return itemsInRow.tabletLarge;
    if (isTabletLarge(windowWith)) return itemsInRow.tablet;
    if (isMobile(windowWith)) return itemsInRow.mobile;

    return itemsInRow.mobile;
  };

  const cardRef = document.querySelectorAll('.donation-card');
  const listLenght = cardRef.length;

  const getAdditionalItems = (itemsLength) => {
    const windowWith = window.innerWidth;
    const itemsInRow = getItemsInRow(windowWith);
    const itemsLeft = itemsLength % itemsInRow;

    if (itemsLeft === 0) {
      return 0;
    }

    return itemsInRow - itemsLeft;
  };

  const newArrayLenght = getAdditionalItems(listLenght);

  const createFrom = Array.apply(null, { length: newArrayLenght }).map(Number.call, Number);

  createFrom.forEach((e) => {
    e = document.createElement('div');
    e.className = 'donation-card donation-card--empty';
    e.innerHTML
      += '<img class="donation-card--empty__img" src="https://hatinka-wp.smarto.com.ua/wp-content/themes/hatinka/assets/images/coat-of-arms.png" alt="">';
    const cardListRef = document.querySelector('.donation-list');
    cardListRef.append(e);
  });
}
