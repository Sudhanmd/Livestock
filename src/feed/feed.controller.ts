// feed.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { FeedService } from './feed.service';
import { Feed } from './feed.entity';
import { CreatefeedDto } from './feed.dto';


@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  // POST method to create a new feed record
  @Post('addFeed')
  async createFeed(@Body() body :CreatefeedDto) {
    return await this.feedService.createFeed(body)
  }

  // GET method to retrieve all feed records
  @Get('getAllFeeds')
  async getAllFeeds() {
    return this.feedService.getAllFeeds();
  }

  // GET method to retrieve a feed record by ID
  @Get('getFeedByFeedId/:feedId')
  async getFeed(@Param('feedId') feedId: number){
    return this.feedService.getFeedById(feedId);
  }

  // PUT method to update an existing feed record
  @Put('updateFeedByFeedId/:feedId')
  async updateFeed(@Param('feedId') feedId: number, @Body() feedData: Feed) {
    return this.feedService.updateFeed(feedId, feedData);
  }

  // DELETE method to remove a feed record by ID
  @Delete('deleteFeedByFeedId/:feedId')
  async deleteFeed(@Param('feedId') feedId: number){
    return this.feedService.deleteFeed(feedId);
  }
}
