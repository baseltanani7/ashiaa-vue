<template>
  <div class="home" :class="{ languageAr: languageAr }">
    <div>
      <div class="content">
        <div class="top-bar">
          <div id="navigation-icon" @click="showMobileNav = !showMobileNav">
            <img class="logo2" src="../assets/logo-ashiaa.png" alt="" />
            <img class="img-mune" src="../assets/menu1.png" alt="" />
          </div>

          <div class="main-wrapper" :class="{ languageAr: languageAr }">
            <header class="main-header">
              <div class="container">
                <div class="parent d-flex align-items-center">
                  <div class="logo">
                    <img src="../assets/logo-ashiaa.png" alt="" />
                  </div>

                  <div class="menu-container d-flex">
                    <ul class="main-menu d-none d-lg-block">
                      <li>
                        <a class="active" href="#parent-panner">HOME</a>
                      </li>
                      <li>
                        <a href="#parent-information">ABOUT US</a>
                      </li>
                      <li>
                        <a href="#parent-section-card">FEATURES</a>
                      </li>
                      <li>
                        <a href="#bacgroung-card-custem">REVIEWS</a>
                      </li>
                      <li>
                        <a href="#scrren-img">SCREENSHOTS</a>
                      </li>
                    </ul>

                    <div class="language">
                      <a
                        class="language-english"
                        @click="languageAr = !languageAr"
                        style="font-family: dubailigth"
                        >EN</a
                      >
                      <a
                        class="language-arabic"
                        @click="languageAr = !languageAr"
                        style="font-family: dubailigth"
                        >AR</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>

      <div id="navigation-mobile" :class="{ open: showMobileNav }">
        <div id="navigation-icon2" @click="showMobileNav = !showMobileNav">
          <img src="../assets/close.png" alt="" />
        </div>
        <ul class="ul-mobile">
          <li>
            <a class="active" href="#parent-panner">HOME</a>
          </li>
          <li>
            <a href="#parent-information">ABOUT US</a>
          </li>
          <li>
            <a href="#parent-section-card">FEATURES</a>
          </li>
          <li>
            <a href="#bacgroung-card-custem">REVIEWS</a>
          </li>
          <li>
            <a href="#scrren-img">SCREENSHOTS</a>
          </li>
          <div class="language2">
            <a
              class="language-english"
              @click="languageAr = !languageAr"
              style="font-family: dubailigth"
              >EN</a
            >
            <a
              class="language-arabic"
              @click="languageAr = !languageAr"
              style="font-family: dubailigth"
              >AR</a
            >
          </div>
        </ul>
      </div>
    </div>

    <div class="parent-panner container" id="parent-panner">
      <div class="row justify-content-between">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <div class="panner-contact">
            <h1 style="font-family: dubai">
              Get <span class="contact-titel">Ashiaa app</span> Now!
            </h1>
            <p style="font-family: dubai">
              Shop our selection of eclectic dining room furniture to create<br />
              your ideal dining space From sleek contemporary dining<br />
              tables to rustic wooden dining sets.
            </p>
            <div class="d-flex">
              <a class="btn-panner" style="font-family: dubai">
                <img src="../assets/android.png" alt="" />
                Googel <span class="store">Store</span>
              </a>
              <a class="btn-panner2" style="font-family: dubai">
                <img class="appel-img" src="../assets/apple.png" alt="" />
                Appel <Span class="store">Store</Span>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-md-6 col-sm-12">
          <div class="panner-img d-flex">
            <img class="phone2" src="../assets/phone.png" alt="" />
            <img class="phone1" src="../assets/phone.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="parent-information container" id="parent-information">
      <div class="row justify-content-between">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="information-img">
            <img
              class="img-about-2"
              src="../assets/img-about-card2.png"
              alt=""
            />
            <img class="img-about" src="../assets/phone.png" alt="" />
            <img
              class="img-about-1"
              src="../assets/img-about-card1.png"
              alt=""
            />
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="information-about">
            <h2 style="font-family: dubai">About The App</h2>
            <p style="font-family: dubai">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div class="information-Explain">
            <h2 style="font-family: dubai">Explain why it's best</h2>
            <p style="font-family: dubai">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="cheke">
            <div class="cheke1 d-flex">
              <img src="../assets/check.png" alt="" />
              <p>Reliable and Secure Platform</p>
            </div>
            <div class="cheke1 d-flex">
              <img src="../assets/check.png" alt="" />
              <p>Everything is perfectly orgainized for future</p>
            </div>
            <div class="cheke1 d-flex">
              <img src="../assets/check.png" alt="" />
              <p>Tons of features and easy to use and customize</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="parent-section-card container" id="parent-section-card">
      <div class="line"></div>
      <div class="col-12">
        <div class="titel">
          <h1 style="font-family: dubai">Spacial Features</h1>
        </div>
      </div>
      <div class="row justify-content-around parent-card">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card card1">
            <div>
              <img src="../assets/img-fee.png" alt="" />
            </div>
            <div>
              <h4 style="font-family: dubai">Themes Made Easy</h4>
              <p style="font-family: dubai">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card card2">
            <div>
              <img src="../assets/img-sun.png" alt="" />
            </div>
            <div>
              <h4 style="font-family: dubai">Powerful Design</h4>
              <p style="font-family: dubai">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card card3">
            <div>
              <img src="../assets/img-article.png" alt="" />
            </div>
            <div>
              <h4 style="font-family: dubai">Creative Content</h4>
              <p style="font-family: dubai">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card card4">
            <div>
              <img src="../assets/img-cart.png" alt="" />
            </div>
            <div>
              <h4 style="font-family: dubai">Online Marketing</h4>
              <p style="font-family: dubai">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bacgroung-card-custem" id="bacgroung-card-custem">
      <div class="parent-card-custmer container">
        <div class="col-12 d-flex justify-content-between">
          <div class="titel-custem col-lg-12 col-md-12 col-sm-12">
            <h1 style="font-family: dubai">what Our User Say</h1>
          </div>
          <div class="prent-line-custem d-flex">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </div>

        <div class="card-parg">
          <p style="font-family: dubai">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />Ipsum has been the industry's standard dummy
            text ever since the 1500s.
          </p>
        </div>

        <swiper
          class="slide-container"
          :slides-per-view="3"
          :space-between="0"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :centerSlide="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :navigation="true"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            750: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 3,
            },
          }"
        >
          <div class="card-wrapper swiper-wrapper test">
            <swiper-slide>
              <div class="card card1-custem">
                <div class="line1-custem"></div>
                <div>
                  <p style="font-family: dubai">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="custem-img1 d-flex">
                  <img src="../assets/profile.png" />
                  <div class="name-custem">
                    <img src="../assets/rating.png" alt="" />
                    <h5 style="font-family: dubai">Ali M. Amade</h5>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="card card1-custem">
                <div class="line1-custem"></div>
                <div>
                  <p style="font-family: dubai">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="custem-img1 d-flex">
                  <img src="../assets/profile.png" />
                  <div class="name-custem">
                    <img src="../assets/rating.png" alt="" />
                    <h5 style="font-family: dubai">Basel Al Tanani</h5>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="card card1-custem">
                <div class="line1-custem"></div>
                <div>
                  <p style="font-family: dubai">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="custem-img1 d-flex">
                  <img src="../assets/profile.png" />
                  <div class="name-custem">
                    <img src="../assets/rating.png" alt="" />
                    <h5 style="font-family: dubai">Majd</h5>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="card card1-custem">
                <div class="line1-custem"></div>
                <div>
                  <p style="font-family: dubai">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="custem-img1 d-flex">
                  <img src="../assets/profile.png" />
                  <div class="name-custem">
                    <img src="../assets/rating.png" alt="" />
                    <h5 style="font-family: dubai">Amade Kitnani</h5>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="card card1-custem">
                <div class="line1-custem"></div>
                <div>
                  <p style="font-family: dubai">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="custem-img1 d-flex">
                  <img src="../assets/profile.png" />
                  <div class="name-custem">
                    <img src="../assets/rating.png" alt="" />
                    <h5 style="font-family: dubai">Mona</h5>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="card card1-custem">
                <div class="line1-custem"></div>
                <div>
                  <p style="font-family: dubai">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="custem-img1 d-flex">
                  <img src="../assets/profile.png" />
                  <div class="name-custem">
                    <img src="../assets/rating.png" alt="" />
                    <h5 style="font-family: dubai">Rania</h5>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </div>
        </swiper>
      </div>
    </div>

    <div
      class="scrren-img container"
      id="scrren-img"
      :class="{ languageAr: languageAr }"
    >
      <div class="col-12">
        <div class="titel-screen col-12">
          <h1 style="font-family: dubai">Some of the screenshots</h1>
        </div>
        <div class="desc-screen col-12">
          <p style="font-family: dubai">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's<br />
            standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>

      <swiper
        class="slide-container2"
        :slides-per-view="3"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :centerSlide="true"
        :loop="false"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="swiperOptions.navigation"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          750: {
            slidesPerView: 2,
          },
          990: {
            slidesPerView: 5,
            spaceBetween: 3,
          },
        }"
      >
        <div class="swiper-wrapper test">
          <swiper-slide>
            <div class="card card-screen">
              <img src="../assets/phone.png" alt="" />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card card-screen">
              <img src="../assets/phone.png" alt="" />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card card-screen">
              <img src="../assets/phone.png" alt="" />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card card-screen">
              <img src="../assets/phone.png" alt="" />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card card-screen">
              <img src="../assets/phone.png" alt="" />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card card-screen">
              <img src="../assets/phone.png" alt="" />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card card-screen">
              <img src="../assets/phone.png" alt="" />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card card-screen">
              <img src="../assets/phone.png" alt="" />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card card-screen">
              <img src="../assets/phone.png" alt="" />
            </div>
          </swiper-slide>
        </div>
      </swiper>

      <div class="parent-arrow">
        <div class="swiper-button-prev swiper-navBtn">
          <img src="../assets/left-arrow.png" alt="" />
        </div>

        <div class="swiper-button-next swiper-navBtn">
          <img src="../assets/right-arrow.png" alt="" />
        </div>
      </div>
    </div>

    <div
      class="parent-Footer container-fluid"
      :class="{ languageAr: languageAr }"
    >
      <hr />
      <div class="row justify-content-evenly">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card footer-section1">
            <a class="navbar-brand titel" href="#" style="font-family: dubai"
              >Grey Space</a
            >
            <p style="font-family: dubai">
              Shop our selection of eclectic dining <br />
              your ideal dining space From sleek sets contemporary dining
              furniture to <br />
              tables to rustic wooden dining create.
            </p>
            <div class="row paret-social">
              <!-- <a href="#" class="social facebook" title="facebook"
                ><svg viewBox="-100 0 500 700">
                  <path
                    d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"
                  /></svg
              ></a> -->
              <!-- <a href="#" class="social twitter" title="Twitter"
                ><svg viewBox="-100 0 500 700">
                  <path
                    d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
                  /></svg
              ></a>
              <a href="#" class="social googleplus" title="GooglePlus"
                ><svg viewBox="-170 0 512 700">
                  <path
                    d="M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3"
                  /></svg
              ></a> -->
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card footer-section2">
            <div>
              <h1>Custem Care</h1>
            </div>
            <ul class="nav-custem">
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Delivery</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Personal Shopping</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Contact Us</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Help?</a
                ></router-link
              >
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card footer-section3">
            <div>
              <h1>Other Services</h1>
            </div>
            <ul class="nav-serves">
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Trade</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Wholesale</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Wedding List</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Affiliates</a
                ></router-link
              >
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card footer-section4">
            <h1>Subscribe newsletter</h1>
            <div class="container">
              <div class="form">
                <form action="" v-on:submit.prevent="submit">
                  <div class="inputBx">
                    <input
                      type="text"
                      style="font-family: dubai"
                      v-model.trim="$v.name.$model"
                      :class="{ 'is-invalid': validationStatus($v.name) }"
                    />
                    <span class="footer-span" style="font-family: dubai"
                      >Full Name</span
                    >
                    <i class="fas fa-user-circle"></i><br />
                    <div v-if="!$v.name.required" class="invalid-feedback">
                      The Name Is Invalid is required
                    </div>
                  </div>

                  <div class="inputEmail">
                    <input
                      type="email"
                      style="font-family: dubai"
                      v-model.trim="email"
                      :class="{ 'is-invalid': validationStatus($v.email) }"
                    />
                    <span class="footer-span" style="font-family: dubai"
                      >Email</span
                    >
                    <i class="fas fa-user-circle"></i><br />
                    <div v-if="!$v.email.required" class="invalid-feedback">
                      The Email Is Invalid is required
                    </div>
                    <div v-if="!$v.email.email" class="invalid-feedback">
                      The Email Is Not Valid
                    </div>
                  </div>

                  <div class="inputMobile">
                    <input
                      type="text"
                      style="font-family: dubai"
                      v-model.trim="mobile"
                      :class="{ 'is-invalid': validationStatus($v.mobile) }"
                    />
                    <span class="footer-span" style="font-family: dubai"
                      >Phone</span
                    >
                    <i class="fas fa-user-circle"></i><br />
                    <div v-if="!$v.mobile.required" class="invalid-feedback">
                      The Phone Is Invalid is required
                    </div>
                  </div>

                  <div class="inputpassword">
                    <input
                      type="password"
                      style="font-family: dubai"
                      v-model.trim="password"
                      :class="{ 'is-invalid': validationStatus($v.password) }"
                    />
                    <span class="footer-span" style="font-family: dubai"
                      >Password</span
                    >
                    <i class="fas fa-user-circle"></i><br />
                    <div v-if="!$v.password.required" class="invalid-feedback">
                      The password Is Invalid is required
                    </div>
                    <div v-if="!$v.password.minLength" class="invalid-feedback">
                      You must have at least
                      {{ $v.password.$params.minLength.min }} letters
                    </div>
                    <div v-if="!$v.password.maxLength" class="invalid-feedback">
                      You must not have grater then
                      {{ $v.password.$params.maxLength.min }} letters
                    </div>
                  </div>
                  <div class="inputSubmit">
                    <input type="submit" value="Register" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="end-footer">
        <hr />
        <h3>© AMARA Living Ltd 2022 - All Rights Reserved</h3>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";
import axios from "axios";
SwiperCore.use([Navigation, Pagination, Autoplay]);

import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

import $ from "jquery";
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".main-header").css("background", "#a0a0a0");
      $(".main-menu li a").css("color", "#fff");
    } else {
      $(".main-header").css("background", "none");
      $(".main-menu li a").css("color", "#fff");
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("#navigation-icon").css("background", "#a0a0a0");
    } else {
      $("#navigation-icon").css("background", "none");
    }
  });
});

export default {
  name: "HomeView",

  components: {
    SwiperSlide,
    Swiper,
  },

  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
      name: "",
      email: "",
      mobile: "",
      password: "",
      el: ".menu-icons",
      showNav: false,
      hidnav: false,
      showMobileNav: false,
      languageEn: true,
      languageAr: false,
      mobileView: true,
      // getData: [],
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      onClick() {
        console.log("clike");
      },
    };
  },

  validations: {
    name: { required },
    email: { required, email },
    mobile: { required },
    password: { required, minLength: minLength(6), maxLength: maxLength(15) },
  },

  mounted() {
    this.$el.addEventListener("click", this.onClick);
  },

  methods: {
    callApi() {
      axios.post("http://localhost:81/test/test.php").then((result) => {
        this.getData = result.data;
        console.log(result);
      });
    },

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
      /*if(validation != "undefined"){
        validation.$error
      }else{
        false;
      }*/
    },

    submit: function () {
      this.$v.$touch();
      if (this.$v.pendding || this.$v.error) return;
    },

    handelView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },

  created() {
    this.handelView();
    window.addEventListener("resize", this.handleView);
    this.callApi();
  },
};
</script>

<style scoped lang="scss">
.languageAr {
  direction: rtl;
  text-align: right;
  .main-wrapper {
    direction: rtl;
  }
  .main-menu {
    margin-right: 230px;
    margin-left: 0px;
  }
  .language-english {
    margin-right: 220px;
    margin-left: 0px;
    margin-top: 30px;
    display: block;
  }
  .language-arabic {
    visibility: hidden;
  }
  #navigation-mobile {
    margin-right: -250px;
    ul {
      width: 70%;
      float: right;
      padding-right: 30px !important;
      padding-top: 30px !important;
    }
  }
  .open {
    transform: translateX(-250px);
    transition: transform 1s ease;
    visibility: visible !important;
  }
  #navigation-icon2 {
    float: left;
    margin-left: 0px;
  }
  .language2 a {
    float: right;
    margin-right: 0px;
    margin-top: 0px;
  }
  .scrren-img {
    direction: rtl;
  }
}
.content {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 10%;
  z-index: 100;
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}
.top-bar {
  display: flex;
  width: 100%;
  /* background-color: rgb(203, 228, 60); */
}

.img-mune {
  height: 35px;
  width: 35px;
  margin-top: 5px;
  margin-right: 3px;
  /* background-color: red; */
}

#navigation-icon {
  position: fixed;
  display: flex !important;
  justify-content: space-between !important;
  padding: 20px !important;
  cursor: pointer;
  /* z-index: 1; */
  visibility: hidden !important;
  /* background-color: rgba(151, 151, 151, 0.377); */
  width: 100%;
  /* height: 12%; */
}
#navigation-icon2 {
  padding: 10px 10px 20px;
  margin-right: 0px;
  /* width: 255px; */
  cursor: pointer;

  img {
    font-size: 2rem;
    float: right !important;
    margin-right: 10px;
  }
}

.open {
  transform: translateX(250px);
  transition: transform 1s ease;
  visibility: visible !important;
}
.close {
  transform: translateX(0px);
  transition: transform 1s ease;
}

#navigation-mobile {
  position: fixed;
  top: 0px !important;
  width: 70% !important;
  padding: 10px 0 0 0;
  background-color: #222222;
  visibility: hidden;
  direction: ltr !important;
  margin-left: -250px;
  z-index: 1000 !important;

  ul {
    list-style: none;
    width: 50%;
    padding-left: 40px;
    margin-top: 20px;
    height: 100vh !important;
    text-decoration: none;

    li {
      /* font-size: 2rem; */
      font-weight: 400;
      margin-bottom: 20px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 17px;
        &:hover {
          color: #d51b36 !important;
        }
      }
    }
  }
}

/* #navigation {
  display: flex;
  width: 100%;
  margin-bottom: 50px;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;

    li {
      font-size: 2rem;
      padding: 2px 10px;
      cursor: pointer;

      &:hover {
        color: #f01515;
      }
    }
  }
} */

/* a:hover {
  color: #888888;
} */
.main-menu li a {
  text-decoration: none;
}
a:hover,
a:focus {
  text-decoration: none;
}
.main-wrapper {
  position: fixed;
  min-height: 100%;
  overflow: hidden;
  direction: ltr;
  visibility: visible;
}

.main-wrapper::before {
  background-position: 100% 0;
  background-size: 100% 16%;
  position: absolute;
  content: "";
  right: 0;
  left: 0;
  bottom: 0px;
  top: 0px;
  background-repeat: no-repeat;
}

.p-70 {
  padding: 80px 0px;
}
.logo img {
  height: 47px;
  width: 30px;
}

.logo2 {
  height: 48px !important;
  width: 30px;
  margin-top: -10px;
  /* z-index: 10; */
}

/******* start header ********/

.main-header {
  top: 0;
  right: 0;
  width: 100%;
  position: fixed;
  /* background-color: #3b5998; */
  z-index: 1000;
}

.main-header .logo {
  /* z-index: 3; */
  position: relative;
}

.main-header .d-flex {
  height: 85px;
}

.main-header .menu-container {
  position: relative;
  align-items: center;
  /* z-index: 45; */
}

.main-menu {
  margin-left: 260px;
}

.main-menu li a {
  align-items: center;
  margin-top: 15px !important;
}

.main-header .main-menu {
  overflow: hidden;
}

.main-header .main-menu li {
  display: inline-block;
  position: relative;
}

.main-header .main-menu a {
  display: block;
  margin: 0 12px;
  font-size: 16px;
  /* font-weight: 450; */
  color: rgb(255, 255, 255);
  /* line-height: 85px; */
  position: relative;
  /* -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -ms-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out; */
  transition: 0.2s ease-in-out;
}

.language a {
  color: #fff;
  font-size: 16px;
  margin-right: 20px;
  margin-left: 250px;
  text-decoration: none;
  cursor: pointer;
}

.language2 a {
  color: #fff;
  font-size: 16px;
  /* margin-right: 20px; */
  /* margin-left: 250px; */
  text-decoration: none;
  cursor: pointer;
}

.language-english {
  display: none;
}

@media (min-width: 300px) and (max-width: 770px) {
  .language {
    display: none;
  }
  .language-english-mobile {
    display: none !important;
  }
}
@media (min-width: 990px) and (max-width: 1500px) {
  #navigation-mobile {
    visibility: hidden;
  }
}
.parent-panner {
  /* position: absolute;
  top: 10px; */
  margin-top: 100px;
}
.panner-contact {
  margin-top: 70px;
  margin-left: 50px;
}
.panner-contact h1 {
  color: #fff;
}
.panner-contact p {
  margin-top: 30px;
  color: #fff;
  font-size: 14px;
}
.contact-titel {
  color: #a41d48;
}
.store {
  font-size: 12px;
  font-weight: 100;
}
.btn-panner {
  max-width: 190px !important;
  max-height: 42px !important;
  color: #fff;
  outline: 1px solid #fff;
  padding: 10px 25px 30px 25px;
  position: relative;
  top: 30px !important;
  text-decoration: none;
  float: left;
  font-size: 16px;
  border-radius: 50px;
}
.btn-panner img {
  margin-left: 0px;
}
.btn-panner:hover {
  background: #a41d48;
  color: #fff;
  transition: 0.7s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.btn-panner2 {
  max-width: 200px !important;
  max-height: 42px !important;
  color: #fff;
  outline: 1px solid #fff;
  padding: 10px 30px 30px 30px;
  position: relative;
  top: 30px !important;
  text-decoration: none;
  background-color: #a41d48;
  float: left;
  font-size: 16px;
  margin-left: 30px;
  border-radius: 50px;
}
.btn-panner2:hover {
  background: transparent;
  color: #fff;
  transition: 0.7s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.phone2 {
  z-index: -1;
  position: absolute;
  max-width: 250px;
  height: 500px;
}
.phone1 {
  margin-left: 170px;
  height: 500px;
  max-width: 250px;
  margin-top: 40px;
}

/* parent-information */
.parent-information {
  margin-top: 150px;
}

.information-img {
  position: relative;
}

.img-about {
  margin-left: 70px;
  height: 500px !important;
}
.img-about-2 {
  position: absolute;
  top: -70px;
  left: -40px;
}

.img-about-1 {
  position: absolute;
  bottom: 20px;
  left: 180px;
}

.information-about h2 {
  color: #a41d48;
}

.information-about p {
  margin-top: 15px;
  font-size: 14px;
}

.information-Explain {
  margin-top: 30px;
  color: #000;
}

.information-Explain h2 {
  color: #a41d48;
}
.information-Explain p {
  margin-top: 15px;
  color: #000;
  font-size: 14px;
}

.cheke {
  margin-top: 50px;
}

.cheke1 img {
  height: 30px;
  width: 30px;
}

.cheke1 p {
  margin-top: 2px;
  margin-left: 5px;
  max-width: 500px;
}

/* parent-section-card */
.parent-section-card {
  margin-top: 150px;
}

.line {
  max-width: 300px;
  height: 5px;
  /* border: 3px solid #bd2a2a00; */
  background-color: #a41d48;
  border-radius: 5px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.titel {
  text-align: center;
  margin-top: 50px;
}

.parent-card {
  /* background-color: red; */
}

.card {
  border: none;
  margin-top: 80px;
}
.card1 {
  text-align: center;
}
.card1 img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card1 p {
  font-size: 13px;
}
.card1 h4,
p {
  margin-top: 17px;
}
.card2 {
  text-align: center;
}
.card2 img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.card2 h4,
p {
  margin-top: 17px;
}
.card2 p {
  font-size: 13px;
}
.card3 {
  text-align: center;
}
.card3 img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card3 p {
  font-size: 13px;
}
.card3 h4,
p {
  margin-top: 17px;
}
.card4 {
  text-align: center;
}
.card4 img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card4 p {
  font-size: 13px;
}
.card4 h4,
p {
  margin-top: 17px;
}

/* parent-card-custmer */
.bacgroung-card-custem {
  background-image: url(../assets/bacground-custmer.png);
  background-repeat: no-repeat;
}
.parent-card-custmer {
  height: 500px;
  margin-top: 150px;
}

.prent-line-custem {
  margin-top: 70px;
  float: right;
}

.titel-custem {
  color: #a41d48;
  text-align: center;
  margin-top: 60px;
}

.card-parg p {
  text-align: center;
  color: #fff;
  font-size: 14px;
}

.line1 {
  height: 30px;
  width: 5px;
  background-color: #a41d48;
  border-radius: 10px;
}
.line2 {
  height: 25px;
  width: 5px;
  background-color: #a41d48;
  border-radius: 10px;
  margin-top: 3px;
  margin-left: 5px;
}
.line3 {
  height: 20px;
  width: 5px;
  background-color: #a41d48;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 5px;
}

.slide-container {
  /* width: 100%; */
  padding: 10px 0;
}

.test {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card {
  /* height: 200px; */
  border: none !important;
  /* max-height: 200px; */
  border-radius: 10px !important;
  margin-right: auto;
  margin-left: auto;
  background-color: none;
}

.line1-custem {
  height: 5px;
  width: 150px;
  background-color: #a41d48;
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card1-custem {
  width: 350px;
  height: 200px;
  margin-top: 20px;
  box-shadow: 0 4px 24px 0 rgb(22 20 18 / 15%);
  border-radius: 10px;
  margin-left: 0px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
}
.card1-custem p {
  margin-left: 20px;
  margin-right: 10px;
  font-size: 14px;
}
.custem-img1 img {
  height: 50px;
  width: 50px;
  margin-top: 10px;
  margin-left: 10px;
}

.name-custem {
  margin-left: 20px;
  margin-top: -30px;
}

.name-custem img {
  height: 80px;
  width: 80px;
}

.name-custem h5 {
  margin-top: -20px;
  padding-left: 10px;
}

/* scrren-img */
.scrren-img {
  position: relative;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
}
.titel-screen {
  text-align: center;
  color: #a41d48;
}
.desc-screen {
  text-align: center;
}
.desc-screen p {
  font-size: 14px;
}
.card-screen {
  margin-left: auto;
  margin-right: auto;
}
.card-screen img {
  /* position: absolute; */
  height: 400px;
  width: 200px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}

.slide-container2 {
  width: 100%;
}

.parent-arrow {
  display: flex;
  width: 100%;
  margin-top: -250px;
  position: absolute;
  justify-content: space-between;
  z-index: 100;
}

.swiper-button-next {
  background-color: #a41d48;
  border-radius: 50%;
  padding: 2px 0px 0px 8px;
  height: 30px;
  width: 30px;
  z-index: 101;
  margin-right: -30px;
}

.swiper-button-next img {
  height: 16px;
  width: 18px;
}

.swiper-button-prev {
  background-color: #a41d48;
  border-radius: 50%;
  padding: 2px 0px 0px 4px;
  height: 30px;
  width: 30px;
  margin-left: -50px;
}

.swiper-button-prev img {
  height: 16px;
  width: 18px;
}
.swiper-navBtn {
  color: #fff;
}

/* form-footer */
.parent-Footer {
  height: 100%;
  margin-top: 150px;
}
.card {
  border: none;
  border-radius: 0px;
}

.footer-section1 {
  margin-top: 13px;
  text-align: left;
  margin-left: 30px;
}
.footer-section1 a {
  font-size: 35px !important;
  text-align: left;
}
.footer-section1 p {
  font-size: 15px;
  margin-top: 20px;
  color: #000;
}

.social {
  display: inline-block;
  width: 36px;
  height: 36px;
  padding: 0px;
  border-radius: 100%;
  margin: 10px;
  transition: all 0.5s ease-in-out;
}
.social svg {
  transition: transform 0.5s ease-out;
}
.social:hover {
  border-radius: 10%;
  transform: rotate(405deg);
}
.social:hover svg {
  transform: rotate(315deg);
}

.facebook {
  fill: #3b5998;
  align-items: center;
  display: block;
  margin-left: 0px auto;
  margin-right: 0px auto;
}
.facebook:hover {
  fill: white;
  background: #3b5998;
}

.twitter {
  fill: #4099ff;
}
.twitter:hover {
  fill: white;
  background: #4099ff;
}

.googleplus {
  fill: #d34836;
}

.googleplus:hover {
  fill: white;
  background: #d34836;
}

.footer-section2 {
  margin-top: 70px;
}
.footer-section2 h1 {
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  margin-left: 80px;
}
.nav-custem {
  margin-top: 5px;
}
.nav-custem li {
  list-style: none;
}
.nav-custem li a {
  transition: 1s;
  color: #000;
  padding-top: 15px;
  text-align: left;
  margin-left: 60px;
  font-size: 17px;
}
.nav-custem li a:hover {
  transform: scale(1.07);
}

.footer-section3 {
  margin-top: 70px;
}
.footer-section3 h1 {
  font-size: 30px;
  font-weight: bold;
}
.nav-serves {
  margin-top: 5px;
}
.nav-serves li {
  list-style: none;
}
.nav-serves li a {
  color: #000;
  padding-top: 15px;
  text-align: left;
  font-size: 17px;
  transition: 1s;
}
.nav-serves li a:hover {
  transform: scale(1.07);
}
.footer-section4 {
  margin-top: 70px;
}
.footer-section4 h1 {
  font-size: 28px;
  font-weight: bold;
}
.form {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
}

input {
  width: 80%;
  outline: none;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 10px;
  padding-left: 10px;
  border-radius: 15px;
  color: #000;
  font-size: 16px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.inputBx {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  margin-bottom: 30px;
}
input:focus ~ span,
input:valid ~ span {
  transform: translateX(0px) translateY(-25px);
  font-size: 14px;
  margin-top: -5px;
}

.view {
  background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
  transition: 0.5s;
}
.footer-span {
  position: absolute;
  left: 10px;
  padding: 10px;
  display: inline-block;
  color: #000;
  transition: 0.5s;
  pointer-events: none;
}
.inputEmail {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  /* margin-bottom: 10px; */
}

.inputMobile {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
}

.inputpassword {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
}

input[type="submit"] {
  background: #000;
  color: #fff;
  max-width: 100px;
  padding: 8px 10px;
  box-shadow: none;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 1.5s;
}

input[type="submit"]:hover {
  background: linear-gradient(
    115deg,
    rgba(0, 0, 0, 0.5),
    rgba(255, 255, 255, 0.25)
  );
  color: #000;
  transition: 0.5s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid #000;
}
.end-footer {
  margin-top: 50px;
}
.end-footer h3 {
  font-size: 17px;
  margin-bottom: 0px;
  padding-bottom: 10px;
}

@media (min-width: 300px) and (max-width: 767px) {
  .footer-section1 {
    text-align: center;
    margin-left: 0px;
  }
  .footer-section1 a {
    text-align: center;
  }
  .footer-section2 h1 {
    text-align: center;
    margin-left: 0px;
  }
  .nav-custem li a {
    margin-left: -30px;
    text-align: center;
  }
  .footer-section3 h1 {
    text-align: center;
  }
  .nav-serves li a {
    margin-left: -30px;
    text-align: center;
  }
  .end-footer h3 {
    font-size: 13px;
  }
  .paret-social {
    margin-left: auto;
    margin-right: auto;
  }
  .footer-section4 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
}

@media (min-width: 300px) and (max-width: 991px) {
  .parent-Footer {
    border-radius: 30% 30% 0% 0% / 5% 5% 10% 10%;
  }
  input {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
}

@media (min-width: 400px) and (max-width: 500px) {
  .main-wrapper {
    /* display: none; */
    visibility: hidden;
  }
  #navigation-icon {
    /* display: blok; */
    visibility: visible !important;
  }
  .parent-panner {
    margin-top: 60px;
  }
  .panner-contact {
    margin-top: 10px;
    display: block;
    margin-left: 30px;
  }
  .panner-contact p {
    margin-top: 15px;
  }
  .panner-img {
    margin-top: 50px;
  }
  .btn-panner {
    font-size: 14px;
    padding: 10px 20px 30px 18px;
  }
  .btn-panner2 {
    width: 140px;
    font-size: 14px;
    padding: 10px 20px 30px 18px;
  }
  .store {
    font-size: 10px;
  }
  .information-about {
    margin-top: 50px;
    text-align: center;
  }
  .information-Explain {
    text-align: center;
  }
  .img-about-1 {
    width: 200px;
    position: absolute;
    left: 150px;
  }
  .img-about-2 {
    position: absolute;
    left: 0px;
    width: 150px;
    height: 150px;
  }
  .panner-img {
    display: grid;
    justify-content: center;
  }
  .phone2 {
    max-width: 220px;
    height: 400px;
    margin-left: -70px;
  }
  .phone1 {
    max-width: 220px;
    height: 400px;
  }
  .information-img {
    display: grid;
    justify-content: center;
  }
  .img-about {
    margin-left: -25px;
  }
  .img-about-2 {
    margin-left: 30px;
  }
  .img-about-1 {
    margin-left: 30px;
  }
  .card {
    margin-right: 20px;
    margin-left: 30px;
  }
  .titel-custem {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .card1-custem {
    width: auto;
  }
  .card2-custem {
    width: auto;
    margin-top: 20px;
  }
  .card3-custem {
    width: auto;
  }
  .info-footer {
    margin-right: auto;
    margin-left: auto;
  }
}
@media (min-width: 501px) and (max-width: 767px) {
  .main-wrapper {
    /* display: none; */
    visibility: hidden;
  }
  #navigation-icon {
    /* display: blok; */
    visibility: visible !important;
  }
  .panner-contact {
    margin-top: 10px;
    display: block;
    margin-left: 30px;
  }
  .panner-img {
    margin-top: 50px;
  }
  .btn-panner {
    font-size: 14px;
    padding: 10px 20px 30px 18px;
  }
  .btn-panner2 {
    width: 140px;
    font-size: 14px;
    padding: 10px 20px 30px 18px;
  }
  .store {
    font-size: 10px;
  }
  .information-about {
    margin-top: 50px;
    text-align: center;
  }
  .information-Explain {
    text-align: center;
  }
  .img-about-1 {
    width: 250px;
    position: absolute;
    left: 200px;
  }
  .img-about-2 {
    position: absolute;
    left: 0px;
    width: 150px;
    height: 150px;
  }
  .panner-img {
    display: grid;
    justify-content: center;
    margin-top: 70px;
  }
  .phone2 {
    max-width: 230px;
    height: 400px;
    margin-left: -70px;
  }
  .phone1 {
    max-width: 230px;
    height: 400px;
  }
  .information-img {
    display: grid;
    justify-content: center;
  }
  .img-about {
    margin-left: -25px;
  }
  .img-about-2 {
    margin-left: 30px;
  }
  .img-about-1 {
    margin-left: 30px;
  }
  .card {
    margin-right: 20px;
    margin-left: 30px;
  }
  .card1-custem {
    width: auto;
  }
  .card2-custem {
    width: auto;
    margin-top: 20px;
  }
  .card3-custem {
    width: auto;
  }
  .cheke1 {
    display: block;
    margin-left: 0 auto;
    margin-right: 0 auto;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .main-wrapper {
    /* display: none; */
    visibility: hidden;
  }
  #navigation-icon {
    /* display: blok; */
    visibility: visible !important;
  }
  .panner-contact {
    margin-top: 0px;
    display: block;
    margin-left: 0px;
  }
  .panner-contact p {
    margin-top: 20px;
  }
  .btn-panner {
    font-size: 14px;
    padding: 10px 20px 30px 18px;
  }
  .btn-panner2 {
    width: 140px;
    font-size: 13px;
    padding: 10px 20px 30px 18px;
  }
  .panner-img {
    margin-right: 20px !important;
  }
  .phone2 {
    max-width: 200px;
    height: 400px;
    margin-right: 20px;
  }
  .phone1 {
    max-width: 200px;
    height: 400px;
    margin-right: 20px;
  }
  .img-about {
    margin-left: 0px;
    margin-right: 50px;
  }
  .img-about-1 {
    width: 220px;
    position: absolute;
    left: 100px;
  }
  .img-about-2 {
    margin-left: 0px;
    width: 150px;
  }
  .card1-custem {
    width: auto;
  }
  .card2-custem {
    width: auto;
    margin-top: 20px;
  }
  .card3-custem {
    width: auto;
  }
}
@media screen and (max-width: 750px) {
  .parent-arrow {
    /* visibility: hidden; */
    display: none;
  }
}
@media (min-width: 990px) and (max-width: 1500px) {
  .main-wrapper {
    /* display: none; */
    visibility: visible;
  }
}
</style>
