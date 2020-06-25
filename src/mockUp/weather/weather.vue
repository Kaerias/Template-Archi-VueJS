<template>
    <div id="weather">
        <div class="container-fluid">
            <div class="row">
                <app-sidebar></app-sidebar>
                <div class="col-md-11 col-lg-11">
                    <div class="row principal-block">
                        <div class="col-lg-8">
                            <weather-cities></weather-cities>

                            <div class="row weather">
                                <weather-icons></weather-icons>
                            </div>
                        </div>
                        <div class="col-lg-4 px-0">
                            <weather-summary></weather-summary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../sidebar';
    import Summary from './weather-summary';
    import Cities from './weather-cities';
    import Icons from './weather-icons';

    export default {
        name: "weather",
        components: {
            appSidebar: Sidebar,
            weatherSummary: Summary,
            weatherCities: Cities,
            weatherIcons: Icons
        }
    }
</script>

<style lang="scss" scoped>
</style>
