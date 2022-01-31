export default function (time: string): string {
    let result: string = ""
    const moment = {
        seconds: () => (Date.now() - new Date(time).getTime()) / 1000,
        minutes: () => Math.round(moment.seconds() / 60),
        hours: () => Math.round(moment.minutes() / 60),
        days: () => Math.round(moment.hours() / 24),
        weeks: () => Math.round(moment.days() / 7),
    }
    if (moment.seconds() < 60) result = "Только что!"
    if (moment.minutes() <= 60 && moment.seconds() >= 60) result = `${moment.minutes()} мин.`
    if (moment.hours() <= 24 && moment.minutes() >= 60) result = `${moment.hours()} ч.`
    if (moment.days() < 365 && moment.hours() > 24) result = `${moment.days()} д.`
    if (moment.weeks() >= 1 && moment.days() >= 7) result = `${moment.weeks()} нед.`

    return result
}
