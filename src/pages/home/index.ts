import Vue from 'vue';
import { Swiper } from 'vux';
import Component from 'vue-class-component';
console.log(Swiper)
@Component({
  components: {
    // problem will show, when you add 'Swiper' in components
    Swiper
  }
})
export default class Home extends Vue {

}