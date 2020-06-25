<template>
    <div class="page-details">
        <div class="page-details__dates">
            <p class="page-details__now"><b>Aujourd'hui</b></p>
            <p class="page-details__date">Lundi 9 Mars</p>
        </div>
        <img class="page-details__sun" alt="sun" src="../../assets/Sun.png">
        <p class="page-details__temperature"><b>7°C</b></p>
    </div>
</template>

<script>
    export default {
        name: "weather-summary"
    }
</script>

<style lang="scss" scoped>
    @media (min-width: 992px) {
        .page-details {
            margin-top: 0 !important;
            height: 100vh;
        }
    }

    @media (max-width: 590px) {
        .page-details {
            margin-top: 0 !important;
            &__temperature {
                padding: 19px;
            }
        }
        p {
            margin-bottom: 0 !important;
        }
    }

    @media (max-width: 991px) {
        .page-details {
            border-radius: 20px 20px 0 0;

            &__sun {
                padding-top: 0 !important;
                display: block;
                margin: 0 auto;
                width: 200px;
            }
        }
        p {
            margin-bottom: 0 !important;
        }
    }

    @media (min-width: 996px) {
        .page-details {
            height: 100vh;
        }
    }

    .page-details {
        background-color: #9D2A44;
        margin-top: 85px;

        &__dates {
            padding-top: 16px;
        }

        &__now {
            font-weight: 300;
            color: white;
            text-align: center;
            font-size: 20px;
            line-height: 33px;
        }

        &__date {
            color: white;
            text-align: center;
            font-size: 20px;
        }

        &__sun {
            max-width: 100%;
            max-height: 100%;
            padding-top: 77px;
            vertical-align: middle;
        }

        &__temperature {
            color: white;
            padding: 43px;
            text-align: center;
            font-size: 29px;
        }
    }

    h1 {
        padding-top: 16px;
        color: #818E94;
        font-size: 30px;
    }
</style>
