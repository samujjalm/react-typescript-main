export class SubscriptionTopic {
    id: string;
    topicName: string;
    subscribed: boolean;
    explanation: string;
    readonly: boolean;

    constructor(
        id: string,
        topicName: string,
        explanation: string,
        subscribed?: boolean,
        readonly?: boolean
    ) {
        this.id = id;
        this.topicName = topicName;
        this.subscribed = subscribed || false;
        this.explanation = explanation;
        this.readonly = readonly || false;
    }
}