// feed.service.ts
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feed } from './feed.entity';
import { CreatefeedDto, UpdatefeedDto } from './feed.dto';


@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(Feed)
    private readonly feedRepository: Repository<Feed>,
  ) {}

  // Method to create a new feed record
  async createFeed(feed:CreatefeedDto) {
         const Feedcreated = await this.feedRepository.save(feed) 
         return Feedcreated;       
  }
   

  async getAllFeeds() {
    try {
      const allfeed =  await this.feedRepository.find();
      return allfeed;
    } catch (error) {
      throw new BadRequestException(error.message || error)
    }
  }

  async getFeedById(id: number){
    try {
      const feed = await this.feedRepository.findOneBy({ feedId: id });
      if (!feed) {
        throw new NotFoundException(`Feed with ID ${id} not found`);
      }
      return feed;
    } catch (error) {
      throw new BadRequestException(error.message || error)
    }
   
  }

  async updateFeed(feedId: number,_updatefeed:UpdatefeedDto) {
    try {
      console.info(_updatefeed)
      const checkfeed = await this.feedRepository.findOne({where:{feedId}});
      if(!checkfeed){
         throw new NotFoundException(`given feedId ${feedId} is not found`)
        }
      const updatefeed = await this.feedRepository.update(checkfeed,_updatefeed)
      return{ success:true, message:updatefeed}
    } catch (error) {
      throw new BadRequestException(error.message || error)
    }
  }


  async deleteFeed(id: number){
    const result = await this.feedRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Feed with ID ${id} not found`);
    }
    return { message:`given id-${id} is deleted successfully`};
  }
}
