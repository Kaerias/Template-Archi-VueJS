<template>
    <div class="col-md-1 col-lg-1 p-0 sidebar flex-shrink-1">
        <nav class="navbar navbar-expand navbar-dark flex-md-column flex-row align-items-center py-2">
            <div class="collapse navbar-collapse ">
                <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between align-items-center">

                    <li class="nav-item">
                        <a class="nav-link logo pl-0 d-flex justify-content-center" href="#">
                            <img alt="Viticia" class="logo__viticia img-responsive"
                                 src="@/assets/logos/Logo.png">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link item d-flex justify-content-center pl-0" href="#"><i
                                class="fas fa-map"></i></a>
                    </li>
                    <li class="nav-item">
                        <router-link exact tag="a" :to="{name: 'weather'}" class="nav-link pl-0">
                            <a class="nav-link item d-flex justify-content-center pl-0" href="#"><i
                                    class="far fa-snowflake"></i></a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link item d-flex justify-content-center pl-0" href="#"><i
                                class="fas fa-chart-line"></i></a>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{name: 'profile'}" class="nav-link pl-0">
                            <a class="nav-link item d-flex justify-content-center pl-0" href="#"><i
                                    class="fas fa-user"></i></a>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link item d-flex justify-content-center pl-0" href="#"><i
                                class="fas fa-cog"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link shutdown d-flex justify-content-center pl-0" href="#"><i
                                class="fas fa-power-off"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

<style lang="scss" scoped>

    @media (max-width: 590px) {
        .principal-block {
            height: 88vh;
        }
        .page-details {
            margin-top: 0 !important;
        }
        .page-titles {
            &__field {
                margin-bottom: 35px;
            }
        }
    }

    .page-titles {
        &__weather {
            padding-top: 16px;
            color: #818E94;
            font-size: 30px;
        }

        &__field {
            color: #C73647;
            font-size: 20px;
        }
    }

    h1, span {
        display: inline-block;
        vertical-align: middle;
    }

    .fa-power-off {
        color: #7A4442;
    }

    .sidebar {
        border-right: #808D93 1px solid;
        border-image: linear-gradient(to bottom, #fff, #d4dbde, #fff);
        border-image-slice: 1;
    }

    i {
        vertical-align: middle;
    }

    .logo {
        &__viticia {
            height: 37px;
            width: 28px;
            vertical-align: middle;
        }
    }

    @media screen and (min-width: 768px) {

        .logo {
            padding-bottom: 80px;
        }

        .item {
            padding-bottom: 40px;
        }
    }

    .navbar-expand .navbar-nav .nav-link {
        padding-right: 0;
    }

    .navbar-dark .navbar-nav .nav-link {
        color: #808D93;
    }

    .nav-link :hover {
        color: #d81f42;
    }

    svg {
        width: 48px;
        height: 48px;
        fill: #818e94;
    }
</style>
