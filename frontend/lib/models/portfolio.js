import backend from '../api/directus';

export default async function getPortfolio() {
    return backend.get('/items/portfolio', {
      params: {
        fields: [
          '*',
          'name',
          'slug',
          'image',
        ],
        filter: {
          status: {
            _in: ['published'],
          },
        },
      },
    }).then((resp) => resp.data.data);
  }

  export async function getPortfolioBySlugs({ portfolioSlug }) {
    return backend.get('/items/portfolio', {
      params: {
        fields: [
          '*',
          'slug',
          'gallery.*',

        ],
        filter: {
          status: {
            _in: ['published'],
          },
          _and: [
            {
              slug: {
                _eq: portfolioSlug,
              },
            },
          ],
        },
      },
    }).then((resp) => resp.data.data[0]);
  }