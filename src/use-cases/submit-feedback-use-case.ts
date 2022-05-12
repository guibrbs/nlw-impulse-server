import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmiteFeedbackUseCaseRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase{
    constructor(
        private feedbacksRepository: FeedbacksRepository,
    ) {}

    async execute(request: SubmiteFeedbackUseCaseRequest){
        const { type, comment, screenshot } = request;

        await this.feedbacksRepository.create({
            type, 
            comment,
            screenshot,
        })
    }
}