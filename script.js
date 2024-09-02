function expandItem(event) {
    const item = event.currentTarget;
    const description = item.querySelector('.description');
  
    // Remove expanded class from all items
    document.querySelectorAll('.grid-item').forEach(el => {
      if (el !== item) {
        el.classList.remove('expanded');
        el.querySelector('.description').style.display = 'none';
      }
    });
  
    // Toggle expansion on the current item
    if (!item.classList.contains('expanded')) {
      item.classList.add('expanded');
      description.style.display = 'block';
    } else {
      item.classList.remove('expanded');
      description.style.display = 'none';
    }
  }
  
  document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', expandItem);
  });
  