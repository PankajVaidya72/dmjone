
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "class/",
                title: "📚 Master Data Structures & Algorithms with Our Class Topics!",
                desc: "Explore a comprehensive collection of Data Structures & Algorithms class topics.",
                codetype: "CSU1051 | Class"
            },
            {
                link: "lab/",
                title: "🔬 Get Hands-On Experience with Data Structures & Algorithms Lab Practicals!",
                desc: "Discover practical and hands-on learning for Data Structures & Algorithms.",
                codetype: "CSU1051P | Lab"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1051`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Key Concepts and Differences",
                desc: "This introduction to Data Structures and Algorithms will cover the distinctions between unions and structures, as well as the differences between primitive and non-primitive data structures, and linear and non-linear data structures.",
                codetype: "Introduction"
            },
            {
                title: "getchar vs putchar",
                desc: "This introduction to Data Structures and Algorithms will cover the distinctions between getchar and putchar.",
                codetype: "Introduction"
            },
            {
                title: "Arrays, Pointers and Multi Pointers",
                desc: "This introduction to Data Structures and Algorithms will cover the details of Arrays, Pointers and Multi Pointers.",
                codetype: "Introduction"
            },
            {
                title: "Basic Concepts and Notions",
                desc: "Learn about the basic concepts and notions of data structures and algorithms. Data structures and algorithms are fundamental to computer science and are used to store and manipulate data, solve problems, and make decisions. This concept is useful for beginner programmers to learn the basics of data structures and algorithms and gives a brief knowhow about their application in the programs.",
                readtime: r(20)
            },
            {
                title: "Data Structures and Operations",
                desc: "Learn about data structures and their operations in data structures and algorithms with this conceptual article. Data structures are a fundamental part of computer science and are used to organize, store, and manipulate data efficiently. This article is a useful exercise for beginner programmers to learn about different types of data structures and their operations, such as traversal, insertion, deletion, and searching, and how to use them to solve real-world problems in their programs."
            },
            {
                title: "Mathematical Notation and Functions",
                desc: "Learn about mathematical notation and functions. Mathematical notation is a language used to express mathematical ideas and concepts, while mathematical functions are a fundamental part of mathematics that map inputs to outputs based on a set of defined rules. This concept is a useful exercise for beginner programmers to learn how to use mathematical notation and functions in their programs to solve real-world problems and improve their mathematical skills."
            },
            {
                title: "Complexity of Algorithms",
                desc: "Learn about the complexity of algorithms in data structures and algorithms. The complexity of an algorithm is a measure of its efficiency, in terms of time and space, and is an important factor to consider when designing and analyzing algorithms. This concept is a useful exercise for beginner programmers to learn how to measure the complexity of algorithms, understand the different types of complexity (such as time complexity and space complexity), and apply this knowledge to optimize their algorithms for improved performance and efficiency."
            },
            {
                title: "Running Time and Storage Cost of Algorithms",
                desc: "Learn about the running time and storage cost of algorithms in data structures and algorithms. The running time and storage cost of an algorithm are important factors to consider when designing and analyzing algorithms, as they directly impact the efficiency and performance of the algorithm. This concept is a useful exercise for beginner programmers to learn how to measure and optimize the running time and storage cost of algorithms, and how to apply this knowledge to create more efficient and scalable programs."
            },
            {
                title: "Array Representation in Memory",
                desc: "Learn about array representation in memory in data structures and algorithms. Arrays are a fundamental data structure in programming and are used to store a collection of elements of the same data type. Understanding how arrays are represented in memory is important for optimizing memory usage and accessing elements efficiently. This concept is a useful exercise for beginner programmers to learn how to represent arrays in memory, understand the benefits and limitations of arrays, and apply this knowledge to create efficient and effective programs.",
                readtime: r(15)
            },
            // {
            //     title: "Operations on Arrays",
            //     desc: "Learn about operations on arrays in data structures and algorithms. Arrays are a fundamental data structure in programming and are used to store a collection of elements of the same data type. Operations on arrays include sorting, searching, insertion, deletion, and merging, and are important for manipulating and analyzing data efficiently. This concept is a useful exercise for beginner programmers to learn how to perform operations on arrays, understand the different types of operations, and apply this knowledge to solve real-world problems in their programs."
            // },
            // {
            //     title: "Multidimensional Arrays",
            //     desc: "Learn about multidimensional arrays in data structures and algorithms. Multidimensional arrays are a useful extension of arrays that allow data to be stored in more than one dimension, such as matrices or grids. Understanding how multidimensional arrays work and how to manipulate them efficiently is important for solving problems in various domains such as image processing, computer graphics, and scientific computing. This concept is a useful exercise for beginner programmers to learn how to declare, initialize, and use multidimensional arrays, and how to apply this knowledge to solve real-world problems in their programs."
            // },
            // {
            //     title: "Sparse Matrices",
            //     desc: "Learn about sparse matrices in data structures and algorithms with this concept. Sparse matrices are a special type of matrix that contains mostly zeros, and are commonly used in domains such as graph theory, scientific computing, and machine learning. Understanding how to store and manipulate sparse matrices efficiently is important for solving problems that involve large datasets and complex computations. This is a useful exercise for beginner programmers to learn how to represent sparse matrices, understand the different types of sparse matrix formats, and apply this knowledge to create efficient and scalable programs."
            // },
            {
                title: "Parallel Algorithms",
                desc: "Learn about parallel algorithms in data structures and algorithms. Parallel algorithms are a class of algorithms that can be executed in parallel on multiple processors or cores, and are commonly used in domains such as scientific computing, data mining, and machine learning. Understanding how to design and analyze parallel algorithms is important for achieving better performance and scalability in modern computing environments. This concept is useful for intermediate programmers to learn how to parallelize algorithms, understand the different types of parallelism, and apply this knowledge to create faster and more efficient programs.",
                link: "c13",
                readtime: r(30)
            },
            {
                title: "Stacks and Queues Representations, Implementations & Applications",
                desc: "Learn about stacks and queues representations, implementations and applications in data structures and algorithms. Stacks and queues are fundamental data structures in programming that are used to store and manipulate data based on a last-in-first-out (LIFO) or first-in-first-out (FIFO) policy, respectively. Understanding the different representations of stacks and queues and how to manipulate them efficiently is important for solving problems in various domains such as operating systems, computer networks, and simulation. This concept is useful for beginner programmers to learn how to represent stacks and queues, understand the different operations on them, and apply this knowledge to create efficient and effective programs.",
                link: "c14"
            },
            // {
            //     title: "Singly Linked Lists and Their Representations",
            //     desc: "Learn about singly linked lists and their representations in data structures and algorithms. Singly linked lists are a fundamental data structure in programming that are used to store and manipulate data in a linear and dynamic way. Understanding how singly linked lists work and how to represent them efficiently is important for solving problems in various domains such as data processing, artificial intelligence, and game development. This is useful for beginner programmers to learn how to represent singly linked lists, understand their operations, and apply this knowledge to create efficient and effective programs."
            // },
            // {
            //     title: "Doubly Linked Lists and Circularly Linked Lists",
            //     desc: "Learn about doubly linked lists and circularly linked lists in data structures and algorithms. Doubly linked lists and circularly linked lists are extensions of singly linked lists that provide additional functionality such as bidirectional traversal and circular data structures. Understanding how doubly linked lists and circularly linked lists work and how to manipulate them efficiently is important for solving problems in various domains such as network routing, computer graphics, and memory management. This is a useful concept for intermediate programmers to learn how to represent doubly linked lists and circularly linked lists, understand their operations, and apply this knowledge to create efficient and effective programs."
            // },
            // {
            //     title: "Operations on Linked Lists - Insertion, Deletion, and Traversal",
            //     desc: "Learn about operations on linked lists - insertion, deletion, and traversal - in data structures and algorithms with this article. Linked lists are a fundamental data structure in programming that are used to store and manipulate data in a dynamic and flexible way. Understanding how to perform operations such as insertion, deletion, and traversal on linked lists efficiently is important for solving problems in various domains such as database management, machine learning, and web development. This program is a useful for beginner programmers to learn how to perform operations on linked lists, understand their time and space complexities, and apply this knowledge to create efficient and effective programs."
            // },







        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `DSA | ${_data.codetype}` : `DSA | Topics`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "Lab 1: Introduction to Data Structure",
                desc: "This lab will provide an overview of key concepts related to data and information management. You will learn about databases, big data, data warehouses, different types of data structures, and the importance of data structures and algorithms. Additionally, you will explore the differences between data structures and algorithms."
            },
            // {
            //     title: "Lab 2",
            //     desc: "Description"
            // }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1051P | ${_data.codetype}` : `CSU1051P | Lab`;
            readtime = _data.readtime || r(5);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }
    function get_assignment(def_date, def_author) {
        const arr = [
            {
                title: "Assignment 1: Application of Fundamental Mechanics on Saturn V Rocket",
                desc: "This assignment is based on the fundamental mechanics of Saturn V Rocket"
            },
            {
                title: "Assignment 2: Types of Magnetic Materials and Application of Lasers",
                desc: "Dive into Magnetic Materials & Laser Applications! Learn about different types of magnetic materials, their properties, and the cutting-edge applications of laser technology. Get ready to be amazed by the power of magnetism and light!"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `a${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `Physics | ${_data.codetype}` : `Physics | Assignment`;
            readtime = _data.readtime || r(6);
            author = _data.author || def_author;
            body_blockcards(link, date, title, desc, codetype, readtime, author);
        }
    }

    /**********  AUTOMATION CONTROL **********/
    // Get Random date near the entered date. 
    function gendate(date) {
        var inputDate = new Date(date);
        var offset = Math.floor(Math.random() * 20 - 10) * 24 * 60 * 60 * 1000;
        // var offset = Math.floor(Math.random() * 10) * -1 * 24 * 60 * 60 * 1000; // This is if you dont want to generate future dates and only past date. supplied date - 10th date.
        var newDate = new Date(inputDate.getTime() + offset);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var outputDate = weekdays[newDate.getUTCDay()] + " " + months[newDate.getUTCMonth()] + " " + newDate.getUTCDate() + ", " + newDate.getUTCFullYear();
        return outputDate;
    }
    function r(t) { return Math.floor(Math.random() * 10) + t };
    var title, desc, codetype, readtime, author = 1, link;
    const functions = {
        class: get_class,
        lab: get_lab,
        // assignment: get_assignment,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}

/*
You can use different approaches and algorithms to solve optimization problems, depending on the specific problem you are trying to solve. Here are a few common methods:

Gradient descent: This is a popular method for optimizing objective functions that are differentiable. It works by iteratively adjusting the parameters of the model in the direction of the negative gradient of the objective function.

Conjugate gradient method: This is a type of iterative optimization algorithm that can be used to solve symmetric, positive definite linear systems. It works by using information from previous iterations to improve convergence rates.

Simulated annealing: This is a probabilistic method for solving optimization problems. It works by randomly perturbing the parameters of the model and accepting the new solution if it results in an improvement to the objective function.

Particle swarm optimization: This is a swarm intelligence-based optimization algorithm that works by having a population of candidate solutions that move and update their positions based on their own fitness and the fitness of other solutions.

Genetic algorithms: This is a population-based optimization algorithm that works by iteratively evolving a population of candidate solutions. It uses genetic operators such as mutation and crossover to generate new solutions and selection to determine which solutions are retained for the next iteration.

Each method has its own advantages and disadvantages and works best for specific types of optimization problems, so you may need to experiment with different methods to find the one that works best for your particular problem.
*/