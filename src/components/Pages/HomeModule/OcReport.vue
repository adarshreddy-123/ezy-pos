<template>
  <div id="chart-container" ref="chart"></div>
</template>

<script>
import * as echarts from 'echarts'; 

export default {
  mounted() {
    this.initChart();
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize); 
  },
  methods: {
    initChart() {
      const dom = this.$refs.chart;
      this.myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
      });

      if (this.option && typeof this.option === 'object') {
        this.myChart.setOption(this.option);
      }
    },
    handleResize() {
      this.myChart.resize();
    }
  },
  data() {
    return {
      option: {
        title: {
          text: 'E-Chart',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#chart-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

</style>
