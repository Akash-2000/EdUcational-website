import React from 'react'
import HtmlCard from '../component/course/html/card/card'
import CssCard from '../component/course/css/csscard/css-card'
import Jscard from '../component/course/javascript/jscard/jscard'
export default function Course() {
  return (
   <div class="container">
  <div class="row">
    <div class="col-sm-4 mr-auto">
     <HtmlCard/>
    </div>
    <div class="col-sm-4">
     <CssCard/>
    </div>
    <div class="col-sm-4">
      <Jscard/>
    </div>
  </div>
</div>
  )
}
