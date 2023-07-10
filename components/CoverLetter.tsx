import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function CoverLetter({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedHeader}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          About me and how I would excel in Data Platform Product Lead role
        </Text>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          I am an experienced product manager who is responsible for ownership of the full lifecycle of the product through the hands of product owners I manage – we work on ideas from gathering and analysing customer insights and analytics data, through forming hypotheses around the opportunities and bets, moving to scoping and overseeing the implementation, rollout, and wrapping it all up with managing the ongoing support of products. At the same time as being focused on supporting my direct reports in the delivery challenges I am coordinating and communicating with all key areas – technology, client-facing teams, and senior leaders – by sharing and aligning the medium- and long-term roadmaps and strategy across the organisation.
        </Text>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Most recently I was responsible for coordinating and delivering the materials and presentation of the strategy for the Lens Data Platform to the Wood Mackenzie executive team and the new owners from the Veritas team. The presentation from the team I worked with and the materials we prepared received highest possible praise and resulted in all our recommendations and initiatives being accepted and fully funded. We then moved to working on the team structures and quarterly level planning with the leaders in Data and Engineering teams and are now executing on that strategy we’ve defined without any major upsets.
        </Text>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          My focus right now is on helping my direct reports in looking for new opportunities to connect with the wider organisation to see and explore the problems sooner, so that we can enable delivery or create new, exciting propositions for either internal or external customers. To achieve that I work very hard on establishing open, honest, and frequent ways of engaging with people and teams outside our area to enable us to spot opportunities that little bit sooner. The most recent ideas we have identified are for delivering ‘an introductory offer’ for visualisations using our data APIs and exploring the opportunities for joining the ‘mass market’ data exchange/marketplaces.
        </Text>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          I always ‘lead from the front’ and get involved in the ways of working experiments to provide my expertise and facilitate discussions, but I am also practical in my approach to the wide area of my responsibility so focus very heavily on trusting and empowering the leaders I work with using the practices and techniques based on intent-based leadership and treating everyone as equally capable, and willing to lead. In all situations where I work with others, I strive to be force multiplier. I don't (usually) code, design new features, write marketing copy, or directly produce much at all that moves the business forward, yet I believe I am essential to our successes because I have the skills and techniques that multiply and scale up the outcomes we achieve by making all the people around me more efficient and effective.
        </Text>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          I have a unique blend of skills based on my experience as an agile coach, technical leader and most recently a product manager allowing me to understand the problem very quickly from all these perspectives and help the team challenge themselves and others on the proposed solutions and approach. I am very outcome-focused and motivated to achieve the goals we agree on as a team, once on the journey my toolset from critical chain management and story mapping allows me to tailor the methods, we use for tracking progress as well as manage change when we move forward towards meeting the needs of the customer.
        </Text>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Based on my coaching and scrum master roles I have the most extensive experience in driving and successfully delivering process and organisational change, with the biggest successes being based on the application of value stream mapping where we uncovered and implemented changes that resulted in 10x decreases in levels of work in progress and an equal decrease in lead times due to reduction in unnecessary inventory (number of items in various team backlogs and plans) and wait times (where work was unnecessarily being held up and waiting to be merged with work from other teams).
        </Text>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Currently, my personal growth is focused on coaching, and sometimes teaching, the people I have line management responsibility for. I do that by sharing my journey, and the tools I used to solve problems and communicate with others. I start and follow on that journey with focus on building and maintaining a safe and trusted space for digesting and solving the problems they face at work. This is a natural progression for my passion for continuous improvement and growth which I both teach and practice every day, based on the North Start Framework and Toyota Kata models.
        </Text>

      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'justify',
  },
  getStartedHeader: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  separator: {
    marginVertical: 10,
    height: 0,
    width: '80%',
  },
});
