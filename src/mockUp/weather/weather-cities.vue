<template>
    <div id="cities">
        <div class="col-lg-12">
            <div class="page-titles">
                <h1 class="page-titles__weather">Météo</h1>
                <h2 class="page-titles__field">Domaine Listrac</h2>
            </div>
        </div>

        <div class="row city-block">
            <div class="col-md-4 col-4 city-block">
                <img class="city-cards" src="../../assets/Lesparre.jpg">
                <h3 class="selected-city-name">Lesparre Médoc</h3>
            </div>
            <div class="col-md-4 col-4 city-block">
                <img class="city-cards" src="../../assets/Pauillac-Eglise.jpg">
                <h3 class="city-name">Pauillac</h3>
            </div>
            <div class="col-md-4 col-4 city-block">
                <div class="block">
                    <p class="city-cards__text">
                        <i style="font-size: 25px;width: 100%;display: block;"
                           class="fas fa-plus"></i>
                        Ajouter une ville</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "weather-cities"
    }
</script>

<style lang="scss" scoped>
    @media (max-width: 590px) {
        .page-titles {
            &__field {
                margin-bottom: 35px;
            }
        }
        p {
            margin-bottom: 0 !important;
        }
    }

    @media (max-width: 590px) {
        .city-block {
            display: none;
        }
    }

    @media (max-width: 590px) {
        .city-block {
            display: none;
        }
    }

    .city-block {
        margin-top: 20px;
    }

    .selected-city-name {
        text-align: center;
        color: #d81f42;
        font-size: 20px;
        font-weight: bolder;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .city-name {
        text-align: center;
        color: #818E94;
        font-size: 20px;
        font-weight: bolder;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .block {
        height: 270px;
        border: 1px solid #818E94;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .city-cards {
        width: 100%;
        border-radius: 30px;
        height: 270px;
        object-fit: cover;
        display: inline-block;
        vertical-align: middle;
        float: none;


        &__text {
            text-align: center;
            color: #818E94;

        }
    }

    h1 {
        padding-top: 16px;
        color: #818E94;
        font-size: 30px;
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
</style>
