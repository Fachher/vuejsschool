import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class SimpleMixins extends Vue{
    mixinValue = 'Hello'
}

