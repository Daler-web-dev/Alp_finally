<template>
    <div>
        <!-- menu side bar -->
        <transition name="fade">
            <div class="side-bar" v-if="animation.sideBar">
                <div class="catalog-categories">
                    <button @click="openMenu" class="close-btn">
                        <closeIcon />
                    </button>
                    <!-- <img class="white-logo" src="../../assets/img/blueLogo.png" alt="" /> -->
                    <a href="#">Наша продукция</a>
                    <a href="#">О нас</a>
                    <a href="#">Вопросы и ответы</a>
                    <a href="#">Карта</a>
                    <a href="#">Оставить заявку</a>
                </div>
                <div class="catalog-categories">
                    <span>Офис:</span>
                    <a href="#">+998 95 509-28-13</a>
                </div>
                <div class="modal-bg" v-if="animation.sideBar" @click="openMenu"></div>
            </div>
        </transition>
        <!-- menu side bar end  -->
        <div class="screen_one">
            <Header />
            <div class="screen_bg">
                <div class="black_bg"></div>
                <img class="fr-screen-bg" src="../../assets/img/screenPict.png" alt="" />
            </div>
            <div class="heading def-width-middle">
                <span class="h1">Крупнейший производитель специализированной обуви</span>
                <div class="btns">
                    <button class="active_button">
                        Посмотреть каталог
                    </button>
                    <button class="unactive_button">
                        <img src="../../assets/img/playbtn.png" alt="" /> Смотреть видеоролик
                    </button>
                </div>
                <div class="refer_down">
                    <div class="line"><div></div></div>
                    <a href="#">
                        Подробнее о нас
                    </a>
                </div>
            </div>
        </div>
        <div class="margin"></div>
        <div class="screen_two">
            <div class="wrapper def-width-middle">
                <div class="mini_heading">
                    <span class="catalog none-for-mobile">каталог</span>
                    <span class="h2">Наша продукция</span>
                    <button class="active_button">
                        <iconSvg />
                        Сортировать
                    </button>
                </div>
                <div class="products">
                    <div class="item" v-for="item of products" :key="item.id">
                        <img :src="require(`@/assets/productsImg/${item.img}`)" alt="" />
                        <div class="description">
                            <span class="h3">{{ item.name }}</span>
                            <p class="note">{{ item.about }}</p>
                            <div v-for="(desc, key) in item.description" :key="desc.key">
                                <span
                                    >{{key}}: <b>{{ desc }}</b></span
                                >
                            </div>
                            <div class="active_button">
                                Добавить в корзину +
                            </div>
                            <!-- <div class="active_button">
                                Убрать из корзины -
                            </div> -->
                            <div class="cart-to">
                                <img src="../../assets/img/greyCart.png" alt="" />
                                <span>В корзину</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="active_button none-for-mobile">Загрузить остальное</button>
            </div>
        </div>
        <div class="margin"></div>
        <div class="staitstics-screen">
            <div class="screen_bg">
                <div class="black_bg"></div>
                <img src="../../assets/img/statistic.png" alt="" />
            </div>
            <div class="heading def-width-middle">
                <span class="span-opacity">«AMIR UL BAXR VMG» в цифрах</span>
                <span class="h2">Мы - один из крупнейших производителей обуви в Узбекистане</span>
                <div class="results">
                    <div class="result-item">
                        <div class="row">
                            <span>101,4</span>
                            <p class="span-opacity">тыс. продукции в 2020</p>
                        </div>
                        <span class="span-opacity">Было произведено в 2020 году</span>
                    </div>
                    <div class="result-item">
                        <div class="row">
                            <span>12,6</span>
                            <p class="span-opacity">тыс. продукции в 2020</p>
                        </div>
                        <span class="span-opacity">Было произведено в 2020 году</span>
                    </div>
                    <div class="result-item">
                        <div class="row">
                            <span>100</span>
                            <p class="span-opacity">тыс. продукции в 2020</p>
                        </div>
                        <span class="span-opacity">Было произведено в 2020 году</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="margin"></div>
        <div class="screen_two">
            <div class="wrapper def-width-middle">
                <div class="mini_heading">
                    <span class="catalog none-for-mobile">развитие</span>
                    <span class="h2">Почему мы?</span>
                </div>
                <div class="products">
                    <div class="item" v-for="item of prefers" :key="item.id">
                        <img :src="require(`@/assets/productsImg/${item.img}`)" alt="" />
                        <div class="description">
                            <span class="h3">{{ item.title }}</span>
                            <p class="note">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // daler's code end // Boboshox's code start
        <div class="margin"></div>
        <div class="screen_companies def-width-middle">
            <div class="mini_heading">
                <span class="catalog none-for-mobile">Новости</span>
                <span class="h2">Компании, с которыми мы работаем</span>
            </div>
            <div class="comp_logos">
                <a href=""><img src="../../assets/img/algolia-1.png" alt=""/></a>
                <!-- <a href=""><img src="../../assets/img/cloudflare-1.png" alt=""/></a> -->
                <a href=""><img src="../../assets/img/g1038.png" alt=""/></a>
                <a href=""><img src="../../assets/img/digitalocean-2.png" alt=""/></a>
                <a href=""><img src="../../assets/img/github-2.png" alt=""/></a>
            </div>
            <p>
                * Все представленные логотипы являются зарегистрированными товарными знаками и не
                <br />
                используются в целях рекламы
            </p>
        </div>
        <div class="margin"></div>
        <div class="screen_questions def-width-middle">
            <div class="mini_heading">
                <span class="catalog none-for-mobile">q&A</span>
                <span class="h2">Частые вопросы</span>
            </div>
            <div class="question">
                <h2>
                    Стоимость и расходы на привлечение постоянно растут
                </h2>
                <p>
                    Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec
                    ante. Cras at est augue. Cras ut interdum elit. Ut malesuada a urna sit amet
                    blandit. Nullam nunc lorem, aliquam at eros laoreet, feugiat bibendum ligula.
                    Aenean congue, massa id aliquet semper, ligula ante tristique nulla, quis
                    posuere dui purus vel urna. Nullam varius, magna nec egestas convallis, orci ex
                    tempus quam, id finibus arcu ipsum fringilla purus. Aenean dapibus suscipit
                    eleifend.
                </p>
            </div>
            <div class="question">
                <h2>
                    Стоимость и расходы на привлечение постоянно растут
                </h2>
                <p>
                    Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec
                    ante. Cras at est augue. Cras ut interdum elit. Ut malesuada a urna sit amet
                    blandit. Nullam nunc lorem, aliquam at eros laoreet, feugiat bibendum ligula.
                    Aenean congue, massa id aliquet semper, ligula ante tristique nulla, quis
                    posuere dui purus vel urna. Nullam varius, magna nec egestas convallis, orci ex
                    tempus quam, id finibus arcu ipsum fringilla purus. Aenean dapibus suscipit
                    eleifend.
                </p>
            </div>
            <div class="question">
                <h2>
                    Стоимость и расходы на привлечение постоянно растут
                </h2>
                <p>
                    Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec
                    ante. Cras at est augue. Cras ut interdum elit. Ut malesuada a urna sit amet
                    blandit. Nullam nunc lorem, aliquam at eros laoreet, feugiat bibendum ligula.
                    Aenean congue, massa id aliquet semper, ligula ante tristique nulla, quis
                    posuere dui purus vel urna. Nullam varius, magna nec egestas convallis, orci ex
                    tempus quam, id finibus arcu ipsum fringilla purus. Aenean dapibus suscipit
                    eleifend.
                </p>
            </div>
            <div class="question">
                <h2>
                    Стоимость и расходы на привлечение постоянно растут
                </h2>
                <p>
                    Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec
                    ante. Cras at est augue. Cras ut interdum elit. Ut malesuada a urna sit amet
                    blandit. Nullam nunc lorem, aliquam at eros laoreet, feugiat bibendum ligula.
                    Aenean congue, massa id aliquet semper, ligula ante tristique nulla, quis
                    posuere dui purus vel urna. Nullam varius, magna nec egestas convallis, orci ex
                    tempus quam, id finibus arcu ipsum fringilla purus. Aenean dapibus suscipit
                    eleifend.
                </p>
            </div>
        </div>
        <div class="margin"></div>
        <form action="" class="def-width-middle">
            <div class="mini_heading">
                <span class="catalog none-for-mobile">ОСТАВЬТЕ ЗАЯВКУ</span>
                <span class="h2">Напишите нам</span>
            </div>
            <div class="inputs">
                <input type="text" placeholder="Введите имя" />
                <input type="number" placeholder="Номер телефона" />
                <input type="e-mail" placeholder="E-mail" />
                <input type="text" placeholder="Наименование компании" />
                <input type="text" placeholder="Вид деятельности SELECT" />
                <input type="text" placeholder="Текст" />
            </div>
            <div class="send">
                <button class="active_button">Отправить</button>
                <p>
                    Нажимая на кнопку «Отправить», вы даете <br />
                    согласие на обработку ваших персональных данных.
                </p>
            </div>
        </form>
        <div class="margin"></div>
        <div class="def-width-middle">
            <div class="mini_heading">
                <span class="catalog none-for-mobile">наши лица</span>
                <span class="h2">Сотрудники компании</span>
            </div>
            <div class="products">
                <div class="person">
                    <img src="../../assets/img/Прямоугольник -1.png" alt="" />
                    <span class="h3">Kyle Ross</span>
                    <p class="note">
                        Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae
                        nec ante. Cras at est augue. Cras ut interdum elit.
                    </p>
                </div>
                <div class="person">
                    <img src="../../assets/img/Прямоугольник -2.png" alt="" />
                    <span class="h3">Kyle Ross</span>
                    <p class="note">
                        Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae
                        nec ante. Cras at est augue. Cras ut interdum elit.
                    </p>
                </div>
                <div class="person">
                    <img src="../../assets/img/Прямоугольник -3.png" alt="" />
                    <span class="h3">Kyle Ross</span>
                    <p class="note">
                        Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae
                        nec ante. Cras at est augue. Cras ut interdum eli.
                    </p>
                </div>
                <div class="person">
                    <img src="../../assets/img/Прямоугольник 113.png" alt="" />
                    <span class="h3">Kyle Ross</span>
                    <p class="note">
                        Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae
                        nec ante. Cras at est augue. Cras ut interdum elit.
                    </p>
                </div>
            </div>
        </div>
        <div class="margin"></div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1368.4766162067108!2d66.92355656720655!3d39.64685201947446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAtlas%20Samarkand!5e0!3m2!1sru!2s!4v1629202971004!5m2!1sru!2s"
            width="100%"
            height="450"
            style="border:0; "
            allowfullscreen=""
            loading="lazy"
        ></iframe>
        <footer>
            <div class="footer_main def-width-middle">
                <div class="f_top">
                    <div class="navigation">
                        <img src="../../assets/img/Сгруппировать 1949.png" alt="" />
                        <a href="">
                            140100, область Самарканд, Самаркандский
                            район, махалля «Янги арик».
                        </a>
                    </div>
                    <div class="navigation">
                        <span>Навигация</span>
                        <a href="#">Вся продукция</a>
                        <a href="#">Вопросы и ответы</a>
                        <a href="#">Карта </a>
                        <a href="#">Вакансии</a>
                        <a href="#">Оставить заявку </a>
                    </div>
                    <div class="navigation">
                        <span>Контакты и реквизиты</span>
                        <a href="#">+998 95 509-28-13 - офис </a>
                        <a href="#">+998 93 548-33-38 - отдел продаж</a>
                        <a href="#">alp-uz@mail.ru</a>
                    </div>
                    <div class="navigation">
                        <span>Реквизиты</span>
                        <a href="#">Р/С: 20208000204358087001</a>
                        <a href="#">MФО: 00278, Сам. Отд. НБУ ВЭД РУз</a>
                        <a href="#">ИНН: 205249867 </a>
                        <a href="#">ОКЭД: 19300 </a>
                    </div>
                </div>
                <div class="f_bottom">
                    <p>
                        Copyright © 2021 Ограниченной Ответственностью «AMIR UL BAXR VMG». Все права
                        защищены.
                    </p>
                    <span>Created by Madad Studio.</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Header from '../layout/header.vue'
import { mapGetters, mapActions, mapState } from 'vuex'
import closeIcon from '../icons-component/closeIcon.vue'
import iconSvg from '../icons-component/sortIcon.vue'

export default {
    components: {
        Header,
        closeIcon,
        iconSvg,
    },
    methods: {
        ...mapActions(['openMenu']),
    },
    computed: {
        ...mapState(['products', 'prefers', 'animation']),
    },
}
</script>

<style></style>
