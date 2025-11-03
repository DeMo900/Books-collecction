
 // Live preview for uploaded cover
    const coverInput = document.getElementById('cover');
    const coverPreview = document.getElementById('cover-preview');
    const fileNameSpan = document.getElementById('file-name');
    const genreSelect = document.getElementById('genre');
    const genreDisplay = document.getElementById('genre-display');

    coverInput.addEventListener('change', () => {
      const file = coverInput.files[0];
      if (file) {
        coverPreview.src = URL.createObjectURL(file);
        fileNameSpan.textContent = file.name;
      }
    });

    // reflect chosen genre below the select
    genreSelect.addEventListener('change', () => {
      genreDisplay.textContent = `Selected: ${genreSelect.value}`;
      genreDisplay.classList.remove('pulse');
      void genreDisplay.offsetWidth;
      genreDisplay.classList.add('pulse');
    });

    // removed year-picker JS — simple number input now submits directly
  