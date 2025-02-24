---
title: On Restlessness
description: Resilience vs stubbornness. Exploitation vs exploration. How the multi-arm bandit problem tells us to allocate our resources. Seneca and Socrates on traveling.
date: 2022-08-23
showToc: true
showHeaderNumbers: true
tags:
  - practical philosophy
---

I’ve spent the better part of the last 4 years living in England. With regards to culture, the Northeastern United States, where I’m from, and England are probably 90% similar. Most of the differences are in funny little things that occasionally pop up but have no real impact on day to day life.

The _road_ is the street and the _street_ is the sidewalk. And I can never remember which one _pavement_ refers to. Or, a few weeks ago, I was playing “words that end with …” with my new brother-in-law (for context, he’s 10 years old and British). I thought we were all out of words that end with _…our_ when he starts dropping _flavour_, and _colour_, and _endeavour_ on me. Fair play little man.

More interestingly, there are a handful of subtler, more deeply rooted, cultural differences that have taken longer to uncover. Example: British people, more than Americans, tend to have a long-term plan for their careers. They’ll say things like “well I worked at a small investment firm with this guy Tom and I learned how to program simulation models. Now I want to go work for Microsoft and learn how to sell software to enterprises before I open up my own shop in 5 years”.

The Brits I know seem more conscious of how the present fits into a long arcing career trajectory, with a past that is helping to guide the future. Of course you’ll find people like this in the States - but its not nearly so pervasive in my experience. Maybe its the history you’re more obviously surrounded by in the UK. Maybe its the more old-fashioned family structure which still has Sunday roasts without fail. Or maybe that’s all too romantic, and it’s just an effective life strategy. At least when embedded within the rest of British culture.

The idea of working somewhere for 5 years while I hone a specific skill is unfathomable to me. Frankly, with everything in life, I am impatient. I want to learn things in a week and build overnight. I have an urge to hedge my bets by working on a number of projects in parallel - optimizing my range and maximizing my future possibilities.

Now, I don’t think that trying things for a short time and moving on is necessarily a losing strategy. Like all the most interesting things in life, discerning resilience from stubbornness, or ambition from restlessness, is a gray area. The unfortunate truth is, there are many interesting things in life, and we simply don’t have enough time to explore them all in depth.

So, how do we make the most of our time and find the right balance between exploring new projects and new ideas, and sticking with the ones we‘re already working on?

[](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7edb9e1-051b-44f5-b0d0-25b82ca408d2_2304x1024.png)

![a ship at sea](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7edb9e1-051b-44f5-b0d0-25b82ca408d2_2304x1024.png "a ship at sea")

### Some Old Advice on Restlessness

First, let’s pay a visit to Epictetus, who has some direct advice on the topic. With regards to not achieving what we have set out for ourselves, he says this:

> “Every habit and capacity is supported and strengthened by the corresponding actions, that of walking by walking, that of running by running. If you want to be a good reader, read, or a good writer, write. But if you pass thirty days without reading and turn to something else, you’ll notice the consequences” -Epictetus, Discourses 2.18

Epictetus goes on to encourage us to look at our past endeavors, and reflect on where we came up short. As Epictetus hints at, we have a stronger inclination to buy a gym membership than go to the gym. Our brains are constantly tempting us to chase the next shiny object.

Seneca provides relevant advice in his writings on traveling. In particular, he writes to his mentee Lucilius, who has evidently just returned from travels which didn’t yield the positive mood swing he was looking for:

> “Are you really surprised that so long a tour and such diversity of scene have not enabled you to throw off this melancholy and this feeling of depression? A change of character, not a change of air, is what you need” - Seneca, Letter XXVIII

While this advice pertains to travel, the sentiment holds - jumping from place to place, or goal to goal, will not bring us where we want to go in itself. Socrates has similar on-the-nose commentary

> “How can you wonder your travels do you no good when you carry yourself around with you? You are saddled with the very thing that drove you away” - Socrates

Travel does not afford escape from ourselves. We should work on ourselves so that our flaws do not chase us all over the world. We should work to find peace, happiness, and purpose wherever we are and in whatever we are doing. They are urging patience and steadfastness.

So we have Epictetus, Seneca, and Socrates who share the opinion to prioritize steadiness over excursion. But what about exploring new topics and traveling to new places? What about branching out? Certainly, these have their benefits.

In my opinion, the advice on this dilemma is largely one-sided because our human bias will naturally take us in the opposite direction. It doesn’t take much discipline to jump to a new endeavor every week. We will naturally explore the things we find interesting to us. Where we need practical advise is on maintaining patience through the boring phases of our work. We need someone to tell us to stick with the things that don’t give us immediate rewards. Let’s dig into the neuroscience behind this.

[](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1a0b5da0-69ec-4860-865f-4374532ccd9b_2304x1024.png)

![a neuroscience research lab](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1a0b5da0-69ec-4860-865f-4374532ccd9b_2304x1024.png "a neuroscience research lab")

### Neuroscience on Restlessness

**The multi-arm bandit problem**

_Exploration vs exploitation_ is a problem that has been scientifically addressed by game theory, machine learning, and neuroscience. The basic premise is that we can gain rewards by exploiting known advantages, but we do so at the opportunity cost of exploring for potentially larger advantages. The formulated game we’ll be looking at is called “the multi-arm bandit problem”. The problem gets its name from a scenario where a gambler is playing on multiple slot machines, but I’ll use a common example of where the problem exists in practice: Facebook ads.

**The scenario:** We have 3 versions of an ad and $100 to spend running them on Facebook. We want to find out which ad drives the most clicks, but because of our limited budget, we also want to be running the one that is more likely to perform better (exploit) while we’re trying to figure it out (explore). For illustrations sake, let’s say we spend the first $20 evenly across all 3 ad variants, showing each one to 1,000 random FB accounts. We get the following results:

[](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa3348b17-d090-4d5a-8125-f61bd938f2b4_1660x590.png)

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa3348b17-d090-4d5a-8125-f61bd938f2b4_1660x590.png)

Based on these results, it is more likely that Version A will deliver the best results if we spend the remaining $80 on a single ad. Our intuition tells us to stop running Version C, and focus on Version A with a minority budget still going to Version B. We do this because it _feels about right_. We are pattern recognizing machines. Our brains have been optimized to take a small, amount of data and make predictions. Unfortunately, we don’t have built in T-test functionality which verifies statistical significance. So we take the limited number of examples we have, and build the next best thing - intuition. It works well for most things, even if we can’t explain how it works. But, its shortcuts and heuristics have shortcomings.

The theoretically optimal agent for this problem performs Bayesian inference in a Hidden Markov Model (HMM). While it is theoretically possible for our brains to execute this model, knowing what we know about neurons, evidence suggests that we use a simpler logistic regression with added heuristics for weighting on more recent samples. For those interested, there is a wonderful paper studying this exact problem in mice and exploring what computation models the mice might be using in their brains: [https://www.biorxiv.org/content/10.1101/2021.05.13.444094v2.full.pdf](https://www.biorxiv.org/content/10.1101/2021.05.13.444094v2.full.pdf)

**While not perfect, our mental model for evaluating optimal resource allocation gets the job pretty well in daily life. Unfortunately, it has built-in biases. It starts to falter in long-term settings and scenarios where the payoffs change over time. We have a tendency to move towards short-term rewards. But as we know all too well, the most rewarding things in life take consistent effort to reach.**

In life, which is far more complex than Facebook advertising, some Project C which sees minimal payoff in the early stages could lead to massive payoffs in the longer term. But our intuition leads us astray, telling us to stop pouring resources into after a very small sample size Working on a new project for a weekend, getting no where with it, and calling it quits if you don’t see massive traction is a predictably bad strategy. Let’s try to do better.

### In Practice

Exploration vs exploitation is a spectrum. There is no right answer for every situation. We don’t want to become stubborn and spend too much time on dead ends, but we also can’t jump from thing to thing without digging in at a deeper level.

What we can glean from the words of Seneca and Socrates and Epictetus, as well as the findings on the multi-arm bandit problem, is that we are biased toward not sticking with things long enough. On the whole, we were more patient with our projects, it would in all likelihood benefit us. When we’re involved with something on an emotional level, it can be nearly impossible to discern stubbornness from resilience. Trying to add a 30% counterweight to our natural bias to move on too soon is a reasonable rule of thumb.

Following the advice of Epictetus, I looked back at the projects and goals I set for myself over the past 4 years, reviewing if I had a tendency to stick with things long past the point of diminishing returns, or if I have a tendency to get restless and move on. My ad hoc historical reflection showed a clear pattern of restless jumping about. In practice, I had a tendency to stop working on things because (i) the next step was not obvious, (ii) the payoff was not guaranteed, or (iii) I was uncertain I could achieve the desired end goal.

#### Love the process

There is a hidden trick for pushing through the low-reward early stages of projects or learning new skills. Loving the process.

While Epictetus asks us to reflect on past endeavors where we failed, I also think we should reflect on where we achieved what we set out to do, at least in part. I think this happens a lot more than we give ourselves credit for.

We must acknowledge that partial achievement is still achievement. **We often move the goal posts, but rarely move them closer to ourselves**. Maybe my side project didn’t turn into a business that makes $1M annually, but I sure learned a lot along the way. I did the hard things I wasn’t sure if I could do. And I grew in the process.

So, start writing a book; if you finish that’s great. If not, you’ve better distilled your own thoughts and become a better write. While we didn’t hit the exact goal we set, it can still be a partial success - we have to work to believe this. **Weekly reflection and recognition of your learnings and progress provides the immediate rewards our minds crave to continue investing resources.**

#### Sequential, not in parallel

A typical scenario: some given Sunday I’m hit with a burst of motivation and decide that in the next 6 weeks I’m going to get my life together like I never have before. I’m going to run three times a week and do yoga every evening and write four chapters of a new book and learn how to use Blender.

We all know how this story ends.

**The truth is, things move slower and we have more time than we realize.** It’s better to do a USA road trip this year and a trip around Europe next year than to hop back and forth between the two.

My tendency to jump onto new projects comes from a fear that I’ll be missing out on something. I feel like if I can do a little bit of everything at once I’ll be able to do the most things. We might feel like this is our last year, our last opportunity, to work on some project or achieve some goal because of changing circumstances, maybe on a personally level, maybe global. In reality, we’ll always retain the ability to change course later - most of these pursuits won’t disappear if we don’t work on them right away.

Give yourself permission to spend adequate time and dedicate all free resources to a single specific goal. Sure, you won’t become a novel-writing-oil-painting-influencer with a six pack by the end of the month, but that wasn’t going to happen anyway. When you’re committing to something that you have struggled in the past to stick with, don’t spread yourself too thin. One at a time.

#### Good Bones

We have an urgency to start new, buy a new dishwasher instead of fix and clean the old one. It’s interesting, however, that people who understand the inner workings of something, whether it be cars or houses or computers, will fix things instead of buying new. They understand nothing is perfect, but knowing it well will allow you to fix what is wrong.

My goal for this next month is to resurrect an old project that I worked a couple of years ago. It was a product for developers to more easily launch micro-software projects. I spent easily 2,000 hours on it, over-engineered the hell out of it. The project as a whole didn’t catch on, but there were parts of it that were interesting. Specifically, I built out a few tools on top of Twitter which drew almost 50k users to sign up. Currently, its in a broken state - a failed credit card the culprit (again, I over-engineered it so much I think it’ll be future proof for years to come). I want to stand it back up, make sure everything is working to give people free access to the Twitter tools again.
