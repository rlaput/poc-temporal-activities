import { log } from "@temporalio/activity"
import axios from 'axios'

export const utilityActivities = () => ({
    async sendEmail(): Promise<string> {
        log.info("Send email called.");
        return 'Send email called';
    },
    async doSomething(): Promise<string> {
        log.info("Do something.");
        await axios.get('https://httpbin.org/get');
        return 'Do something!';
    }
})