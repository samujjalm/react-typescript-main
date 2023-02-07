import {SubscriptionTopic} from "./SubscriptionTopic";

class Util {
    addToZ(x: number) {
        const translatedTopics = {
            '1': {
                name: '1-name',
                description: '1-description',
            },
            '2': {
                name: '2-name',
                description: '2-description',
            },
            '3': {
                name: '3-name',
                description: '3-description',
            },
            '4': {
                name: '4-name',
                description: '4-description',
            },
            '5': {
                name: '5-name',
                description: '5-description',
            },
            '6': {
                name: '6-name',
                description: '6-description',
            },

        };
        let mappedTopics:SubscriptionTopic[] = [
            new SubscriptionTopic(
                '3',
                '3-t',
                '3-e',
                false,
                false
            ),
            new SubscriptionTopic(
                '5',
                '3-t',
                '3-e',
                true,
                true
            ),
        ];
        // let translatedTopicsMap = new Map<string, object>();
        // translatedTopicsMap.set('1', new TranslatedTopic('1-name', '1-description'));
        // translatedTopicsMap.set('2', new TranslatedTopic('2-name', '2-description'));
        // translatedTopicsMap.set('3', new TranslatedTopic('3-name', '3-description'));
        // translatedTopicsMap.set('4', new TranslatedTopic('4-name', '4-description'));
        // translatedTopicsMap.set('5', new TranslatedTopic('5-name', '5-description'));
        // translatedTopicsMap.set('6', new TranslatedTopic('6-name', '6-description'));

        const subscribableTopicsMap = new Map(
            mappedTopics.map(topic => {
                return [topic.id, topic];
            }),
        );

        const mappedHiddenTopics:SubscriptionTopic[] = [];
        for (const [key, value] of Object.entries(translatedTopics)) {
            if(!subscribableTopicsMap.has(key)) {
                mappedHiddenTopics.push(new SubscriptionTopic(
                    key,
                    value.name,
                    value.description,
                    false,
                    true,
                ));
            }
        }

        // translatedTopicsMap.forEach((value, key) => {
        //     if(!subscribableTopicsMap.has(key)) {
        //         nonSubscribableTopics.push(new SubscriptionTopic(
        //             key,
        //             (<TranslatedTopic>value).name,
        //             (<TranslatedTopic>value).description,
        //             false,
        //             false,
        //         ));
        //     }
        // });

        console.log(mappedHiddenTopics.length);
        console.log(mappedHiddenTopics);
        let z = 100;
        return x + z;
    }

}

export {Util};