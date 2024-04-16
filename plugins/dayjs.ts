import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import duration from 'dayjs/plugin/duration'
import utc from 'dayjs/plugin/utc'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isBetween from 'dayjs/plugin/isBetween'

import 'dayjs/locale/en'
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/ja'
import 'dayjs/locale/de'

dayjs.extend(utc)
dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(isBetween)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs: dayjs,
    },
  }
})
