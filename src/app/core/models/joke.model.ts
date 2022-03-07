import { Deserializable } from "./deserializable.interface";

export class Joke implements Deserializable {
    id: string = '';
    createdAt: string = '';
    category: string = '';
    value: string = '';
    expiration: Date | null = null;

    deserialize(input: any) {
        this.id = input.id;
        this.createdAt = input.created_at;
        this.value = input.value;

        return this;
    }

    setCategory(category: string) {
        this.category = category;
    }

    setExpirationDate(date: Date) {
        this.expiration = date;
    }

    toString(): string {
        return JSON.stringify({
            id: this.id,
            created_at: this.createdAt,
            value: this.value,
            category: this.category,
            expiration: this.expiration
        });
    }
}