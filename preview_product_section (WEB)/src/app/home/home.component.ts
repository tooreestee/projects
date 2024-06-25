import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prods: any = [

    {
      ref: 1,
      title: "XIAOMI Redmi 13C - 6,74 - 8 GB - 256 GB - Noir - Garantie 1 an",
      price: 529,
      oldPrice: 699,
      description: "Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Reiciendis perspiciatis beatae quasi expedita voluptates ullam eveniet repellat possimus repudiandae sed exercitationem. Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Reiciendis perspiciatis beatae quasi expedita voluptates ullam eveniet repellat possimus repudiandae sed exercitationem. Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Reiciendis perspiciatis beatae quasi expedita voluptates ullam eveniet repellat possimus repudiandae sed exercitationem.",
      images: [
        "/assets/img/phone1F1.png",
        "/assets/img/phone1F2.png",
        "/assets/img/phone1F3.png"
      ],
      backgroundColor: "linear-gradient(45deg, #673AB7 28%, rgb(0, 150, 136) 88%)"
    },
    {
      ref: 2,
      title: "Infinix SMART 8 6,6 4GO 64GO - BLANC",
      price: 324,
      oldPrice: 349,
      description: "Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Reiciendis perspiciatis beatae quasi expedita voluptates ullam eveniet repellat possimus repudiandae sed exercitationem. Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Reiciendis perspiciatis beatae quasi expedita voluptates ullam eveniet repellat possimus repudiandae sed exercitationem. Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Reiciendis perspiciatis beatae quasi expedita voluptates ullam eveniet repellat possimus repudiandae sed exercitationem.",
      images: [
        "/assets/img/phone2F1.png",
        "/assets/img/phone2F2.png"
      ],
      backgroundColor: "linear-gradient(45deg, #E91E63 20%, #5bb7ff 111%)"
    },
    {
      ref: 3,
      title: "Redmi Note 13 Pro - 8Go - 256Go - 200MP - Noir - Garantie 1 an",
      price: "1,059",
      oldPrice: "1,699",
      description: "Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Reiciendis perspiciatis beatae quasi expedita voluptates ullam eveniet repellat possimus repudiandae sed exercitationem. Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Reiciendis perspiciatis beatae quasi expedita voluptates ullam eveniet repellat possimus repudiandae sed exercitationem. Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Reiciendis perspiciatis beatae quasi expedita voluptates ullam eveniet repellat possimus repudiandae sed exercitationem.",
      images: [
        "/assets/img/phone3F1.png",
        "/assets/img/phone3F2.png",
        "/assets/img/phone3F3.png"
      ],
      backgroundColor: "linear-gradient(45deg, #5890bd 20%, #E91E63 111%)"
    }


  ]


  productSelected: any = []

  imagesSelected: any = []

  imageSelected = ""

  selectProduct(ref: any) {

    const product = this.prods.filter((p: any) => p.ref === ref)

    this.productSelected = product

    this.imagesSelected = product[0].images

    this.imageSelected = product[0].images[0]

    this.animateImage()

    const container: any = document.querySelector(".realstate3dsection")
    const containerMobile: any = document.querySelector(".realstate3dsection-mobile")

    container.style.backgroundImage = product[0].backgroundColor
    containerMobile.style.backgroundImage = product[0].backgroundColor

    containerMobile.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

  }

  selectImage(img: any) {

    this.imageSelected = img

  }

  getBackground(url: any) {

    return "url('" + url + "')"

  }

  animateImage() {

    const container: any = document.querySelector(".imagePreview")

    container.style.opacity = "0"
    container.style.scale = "0.3"
    container.style.transform = "translateY(50%)"

    setTimeout(() => {
      container.style.opacity = "1"
      container.style.scale = "1"
      container.style.transform = "translateY(0%)"
    }, 100)

  }

  constructor() { }

  ngOnInit(): void {

    this.selectProduct(1)

  }

}
