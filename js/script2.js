const cameraStream = document.querySelector('#camera-stream');
        const takePictureBtn = document.querySelector('#take-picture-btn');
        const pictureCanvas = document.querySelector('#picture-canvas');
        const pictureContainer = document.querySelector('.picture-container');
        const cameraContainer = document.querySelector('.camera-container');
        const savePictureBtn = document.querySelector('#save-picture-btn');
        const downloadPictureBtn = document.querySelector('#download-picture-btn');
        const constraints = {
          video: true,
        };
      
        navigator.mediaDevices.getUserMedia(constraints)
          .then(function(stream) {
            cameraStream.srcObject = stream;
          })
          .catch(function(error) {
            console.error(error);
          });
      
        function takePicture() {
          const pictureContext = pictureCanvas.getContext('2d');
          const width = cameraStream.videoWidth;
          const height = cameraStream.videoHeight;
          pictureCanvas.width = width;
          pictureCanvas.height = height;
          pictureContext.drawImage(cameraStream, 0, 0, width, height);
          pictureContainer.style.display = 'block';
        }
      
        function savePicture() {
            const pictureData = pictureCanvas.toDataURL('image/png');
            const date = new Date().toLocaleDateString();
            localStorage.setItem(date, pictureData);
            alert('Zdjęcie zostało zapisane.');

            // Dodaj zdjęcie do historii
            const historyGallery = document.querySelector('#picture-gallery');
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = pictureData;
            const dateText = document.createTextNode(date);
            li.appendChild(dateText);
            li.appendChild(img);
            historyGallery.appendChild(li);
        }
                
        
        function downloadPicture() {
            const pictureData = pictureCanvas.toDataURL('image/jpeg');
            const date = new Date().toISOString().slice(0, 10);
            const filename = `${date}.jpg`;
            const link = document.createElement('a');
            link.href = pictureData;
            link.download = filename;
            link.click();
        }

        downloadPictureBtn.addEventListener('click', downloadPicture);
        takePictureBtn.addEventListener('click', takePicture);
        savePictureBtn.addEventListener('click', savePicture);
        downloadPictureBtn.addEventListener('click', downloadPicture);