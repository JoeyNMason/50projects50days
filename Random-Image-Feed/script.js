const container = document.querySelector('.container')
        const picsumURL = 'https://picsum.photos/'
        const rows = 10
        const totalImages = rows * 3
        const retryDelay = 1000 // Delay in ms before retrying a failed image

        if (container) {
            let count = 0
            function appendImage() {
                if (count >= totalImages) return

                const img = document.createElement('img')
                img.src = `${picsumURL}${getRandomSize()}`
                img.alt = 'Random Image'
                img.onload = () => {
                    console.log('Appended image with src:', img.src)
                    container.appendChild(img)
                    count++
                    setTimeout(appendImage, 500)  // Add a delay of 500ms between each request
                }
                img.onerror = () => {
                    console.error('Failed to load image', img.src)
                    setTimeout(appendImage, retryDelay)  // Retry after a delay
                }
            }

            appendImage()
        } else {
            console.error('Container element not found')
        }

        function getRandomSize() {
            return `${getRandomNr()}`
        }

        function getRandomNr() {
            return Math.floor(Math.random() * 200) + 300 // Generate random number between 300 and 500
        }