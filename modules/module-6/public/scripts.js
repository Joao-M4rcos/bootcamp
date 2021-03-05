const Mask = {
    apply(input, func) {
        setTimeout(function(){
            input.value = Mask[func](input.value)
        }, 1)
    },
    formatBRL(value) {
        value = value.replace(/\D/g, "")

        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value/100)
    },
    cpfCnpj(value){
        value = value.replace(/\D/g, "")

        if(value.length > 14) {
            value = value.slice(0, -1)
        }

        //check if is cpf or cnpj
        if(value.length > 11){
            //11222333444455
            value = value.replace(/(\d{2})(\d)/, "$1.$2")
            //11.222333444455
            value = value.replace(/(\d{3})(\d)/, "$1.$2")
            //11.222.333444455
            value = value.replace(/(\d{3})(\d)/, "$1/$2")
            //11.222.333/444455
            value = value.replace(/(\d{4})(\d)/, "$1-$2")
            //11.222.333/4444-55
        }
        else {
            // 111.222.333-80
            value = value.replace(/(\d{3})(\d)/, "$1.$2")
            value = value.replace(/(\d{3})(\d)/, "$1.$2")
            value = value.replace(/(\d{3})(\d)/, "$1-$2")
        }

        return value
    },
    cep(value){
        value = value.replace(/\D/g, "")

        if(value.length > 8) {
            value = value.slice(0, -1)
        }

        value = value.replace(/(\d{5})(\d)/, "$1-$2")

        return value        
    }

}

const PhotosUpload = {
    input: "",
    preview: document.querySelector('#photos-preview'), 
    uploadLimit: 6,
    files: [],

    handleFileInput(event) {
        const {files: fileList} = event.target


        PhotosUpload.input = event.target

        if (PhotosUpload.hasLimit(event)) return

        Array.from(fileList).forEach(file => {
            PhotosUpload.files.push(file)
            
            const reader = new FileReader()

            reader.onload = () => {
                const image = new Image()

                image.src = String(reader.result)

                const div = PhotosUpload.getContainer(image)

                PhotosUpload.preview.appendChild(div)
            }

            reader.readAsDataURL(file)
        })
        
        PhotosUpload.input.files = PhotosUpload.getAllFiles()
    },

    hasLimit(event){
        const { uploadLimit, input, preview } = PhotosUpload
        const { files: fileList } = input    

        if (fileList.length > uploadLimit) {
            alert(`Send till 6 ${uploadLimit} photos`)
            event.preventDefault()

            return true
        }

        const photosDiv = []
        preview.childNodes.forEach(item => {

            if (item.classList && item.classList.value == "photo")
                photosDiv.push(item)
        })

        const totalPhotos = fileList.length + photosDiv.length
        if (totalPhotos > uploadLimit) {
            alert("You have reach the max limit of photos")
            event.preventDefault()

            return true
        }

        return false
    },

    getAllFiles() {
        const dataTransfer = new ClipboardEvent("").clipboardData || new DataTransfer()

        PhotosUpload.files.forEach(file => dataTransfer.items.add(file))

        // console.log(dataTransfer)
        return dataTransfer.files
    },
    
    getContainer(image) {
        //div receberá a criação da div
        const div = document.createElement('div')

        //div com class photo
        div.classList.add('photo')

        div.onclick = PhotosUpload.removePhoto

        div.appendChild(image) //colocando image dentro da div

        div.appendChild(PhotosUpload.getRemoveButton())

        return div
    },

    getRemoveButton() {
        //criando material icon de remoção
        const button = document.createElement('i')

        button.classList.add('material-icons')
        button.innerHTML = "close"

        return button
    },

    removePhoto(event) {
        //event target = i
        //parentNode = acima dele
        const photoDiv = event.target.parentNode // <div class="photo">

        const photosArray = Array.from(PhotosUpload.preview.children)
        
        const index = photosArray.indexOf(photoDiv)

        //splice = aplicado no array para retirar uma posição no array
        //segundo parâmetro é quanto vai remover
        PhotosUpload.files.splice(index, 1)

        //chama novamente a função atualizando o file que foi removido.
        PhotosUpload.input.files = PhotosUpload.getAllFiles()

        photoDiv.remove()
    },

    removeOldPhoto(event) {
        const photoDiv = event.target.parentNode

        if (photoDiv.id) {
            const removedFiles = document.querySelector('input[name="removed_files"')
            if (removedFiles) {
                removedFiles.value += `${photoDiv.id},`
            }
        }

        photoDiv.remove()
    }
}

const ImageGallery = {
    highlight: document.querySelector('.gallery .highlight > img'),
    previews: document.querySelectorAll('.gallery-preview img'),
    setImage(e) {
        const { target } = e

        ImageGallery.previews.forEach(preview => preview.classList.remove('active'))
        target.classList.add('active')

        ImageGallery.highlight.src = target.src
        Lightbox.image.src = target.src
    }
}

const Lightbox = {
    target: document.querySelector('.lightbox-target'),
    image: document.querySelector('.lightbox-target img'),
    closeButton: document.querySelector('.lightbox-target a.lightbox-close'),
    open() {
        Lightbox.target.style.opacity = 1
        Lightbox.target.style.top = 0
        Lightbox.target.style.bottom = 0
        Lightbox.closeButton.style.top = 0
    },
    close(){
        Lightbox.target.style.opacity = 0
        Lightbox.target.style.top = "-100%"
        Lightbox.target.style.bottom = "initial"
        Lightbox.closeButton.style.top = "-80pc"
    }
}