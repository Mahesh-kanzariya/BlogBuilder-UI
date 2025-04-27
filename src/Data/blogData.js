// Initial blog post state
export const initialPost = {
    title: '',
    content: '',
    category: '',
    tags: [],
    coverImage: '',
    coverImageFile: null,
    isDraft: true,
    publishDate: '',
    metaDescription: '',
    contentBlocks: [{ 
      type: 'text', 
      content: '', 
      id: Date.now(), 
      images: [],
      fontFamily: 'Arial, sans-serif'
    }]
  };
  
  // Categories for blogs
  export const categories = [
    { value: 'technology', label: 'Technology' },
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'health', label: 'Health' },
    { value: 'design', label: 'Design' },
    { value: 'business', label: 'Business' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'development', label: 'Development' }
  ];
  
  // Font family options
  export const fontFamilies = [
    { value: 'Arial, sans-serif', label: 'Arial' },
    { value: 'Times New Roman, serif', label: 'Times New Roman' },
    { value: 'Courier New, monospace', label: 'Courier New' },
    { value: 'Georgia, serif', label: 'Georgia' },
    { value: 'Verdana, sans-serif', label: 'Verdana' }
  ];