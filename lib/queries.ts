import { gql } from "graphql-request";

export const mySocials = gql`
  {
    viewer {
      githubUrl: url
      whatsAppUrl: company
      socialAccounts(first: 6) {
        nodes {
          provider
          url
        }
      }
    }
  }
`;

export const myQuery = gql`
  {
    viewer {
      name
      avatarUrl
      profileREADME: repository(name: "markvayson") {
        object(expression: "HEAD:README.md") {
          ... on Blob {
            text
          }
        }
      }
      pinnedItems(first: 6) {
        totalCount
        nodes {
          ... on Repository {
            name
            url
            description
            homepageUrl
            openGraphImageUrl
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const namedRepoQuery = (name: string) => gql`
{
  viewer {
    repository(name: "${name}"){
      name
      url
      description
      homepageUrl
      openGraphImageUrl
      socialAccounts(first: 6) {
           nodes {
             provider
             url
           }
         }
      repositoryTopics(first: 10) {
        nodes {
          topic {
            name
          }
        }
      }
    }
  }
}
`;

export const myPinnedRepoQuery = gql`
  {
    viewer {
      pinnedItems(first: 6) {
        totalCount
        nodes {
          ... on Repository {
            name
            url
            description
            homepageUrl
            openGraphImageUrl
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

// socialAccounts(first: 6) {
//   nodes {
//     provider
//     url
//   }
// }
