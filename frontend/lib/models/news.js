import backend from '../api/directus';

export default async function getNews(attributes = {}) {
    const { limit, offset } = attributes;
    const params = {
      fields: [
        '*',
      ],
      filter: {
        status: {
          _in: ['published'],
        },
      },
      sort: '-date_created',
    };
  
    if (limit) {
      params.limit = limit;
    }
  
    if (offset) {
      params.offset = offset;
    }
  
    return backend.get('/items/news', { params }).then((resp) => resp.data.data);
  }

  export async function getNewsBySlugs({ newsSlug }) {
    return backend.get('/items/news', {
      params: {
        fields: [
          '*',
        ],
        filter: {
          status: {
            _in: ['published'],
          },
          _and: [
            {
              slug: {
                _eq: newsSlug,
              },
            },
          ],
        },
      },
    }).then((resp) => resp.data.data[0] || null);
  }

  export async function getNewsCount() {
    return backend.get('/items/news', {
      params: {
        filter: {
          status: {
            _in: ['published'],
          },
        },
        meta: ['filter_count'],
      },
    }).then((resp) => {
      const {
        data: {
          meta: {
            filter_count: count,
          },
        },
      } = resp;
  
      return count;
    });
  }