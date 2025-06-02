# Algorythm
![Algorythm](https://github.com/user-attachments/assets/2cfe51bb-1bee-4e9e-968e-02b76672c74f)
An interactive web application for visualizing algorithms to enhance learning and understanding of computer science concepts.

## 🌟 Features

- **Interactive Visualizations**: Watch algorithms execute step-by-step with smooth animations
- **Multiple Algorithm Categories**:
  - Sorting Algorithms ( Insertion Sort, Quick Sort, Merge Sort, etc.)
  - Searching Algorithms (Binary Search, Linear Search)
- **Customizable Parameters**: Adjust array sizes, animation speed, and input data
- **Educational Content**: Learn about time complexity, space complexity, and algorithm behavior
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Vue.js 
- **Styling**: CSS3 Animations, Flexbox/Grid
- **Build Tools**: [Webpack/Vite/Parcel - specify your build tool]
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/XuanGiaHanNguyen/Algorythm.git
   cd Algorythm
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📖 Usage

1. **Select an Algorithm**: Choose from the available categories on the main dashboard
2. **Configure Parameters**: Set array size, animation speed, and initial data
3. **Start Visualization**: Click the "Start" button to begin the algorithm execution
4. **Control Playback**: Use play, pause, step-forward, and reset controls
5. **Analyze Results**: View time/space complexity information and performance metrics

### Supported Algorithms

#### Sorting Algorithms
- Insertion Sort
- Merge Sort
- Quick Sort

#### Searching Algorithms
- Linear Search
- Binary Search
  (Future development)

## 🎨 Customization

### Adding New Algorithms

1. Create a new algorithm file in `/src/algorithms/`
2. Implement the required interface:
   ```javascript
   class YourAlgorithm {
     constructor(data) {
       this.data = data;
       this.steps = [];
     }
     
     execute() {
       // Your algorithm implementation
       // Record each step for visualization
     }
     
     getComplexity() {
       return {
         time: "O(n²)",
         space: "O(1)"
       };
     }
   }
   ```
3. Register the algorithm in `/src/config/algorithms.js`
4. Add visualization logic in `/src/visualizers/`

### Styling

Modify CSS variables in `/src/styles/variables.css` to customize colors, animations, and layout:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --animation-speed: 1s;
  --border-radius: 8px;
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Submit a Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Add comments for complex algorithm logic
- Include unit tests for new algorithms
- Update documentation for new features
- Ensure responsive design compatibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Xuan Gia Han Nguyen**
- GitHub: [@XuanGiaHanNguyen](https://github.com/XuanGiaHanNguyen)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/xuangiahannguyen/)

## 🙏 Acknowledgments

- Inspired by various algorithm visualization tools and educational platforms
- Thanks to the open-source community for valuable resources and inspiration
- Special thanks to [mention any specific inspirations or contributors]

## 🔮 Future Enhancements

- [ ] Add more advanced algorithms
- [ ] Implement algorithm comparison feature
- [ ] Add code export functionality
- [ ] Mobile app version
- [ ] Collaborative learning features
